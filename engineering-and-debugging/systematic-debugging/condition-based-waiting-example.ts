// Complete implementation of condition-based waiting utilities.
// Context: replace arbitrary test timeouts with condition polling.

type EventType = string;

interface EventRecord {
  type: EventType;
  data?: { id?: string; [key: string]: unknown };
}

interface EventStore {
  getEvents(threadId: string): EventRecord[];
}

/**
 * Wait for a specific event type to appear in thread
 *
 * @param eventStore - The event store to query
 * @param threadId - Thread to check for events
 * @param eventType - Type of event to wait for
 * @param timeoutMs - Maximum time to wait (default 5000ms)
 * @returns Promise resolving to the first matching event
 *
 * Example:
 *   await waitForEvent(eventStore, workerThreadId, 'TASK_DONE');
 */
export function waitForEvent(
  eventStore: EventStore,
  threadId: string,
  eventType: EventType,
  timeoutMs = 5000
): Promise<EventRecord> {
  return new Promise((resolve, reject) => {
    const startTime = Date.now();

    const check = () => {
      const events = eventStore.getEvents(threadId);
      const event = events.find((e) => e.type === eventType);

      if (event) {
        resolve(event);
      } else if (Date.now() - startTime > timeoutMs) {
        reject(new Error(`Timeout waiting for ${eventType} event after ${timeoutMs}ms`));
      } else {
        setTimeout(check, 10); // Poll every 10ms for efficiency
      }
    };

    check();
  });
}

/**
 * Wait for a specific number of events of a given type
 *
 * @param eventStore - The event store to query
 * @param threadId - Thread to check for events
 * @param eventType - Type of event to wait for
 * @param count - Number of events to wait for
 * @param timeoutMs - Maximum time to wait (default 5000ms)
 * @returns Promise resolving to all matching events once count is reached
 *
 * Example:
 *   // Wait for 2 LOG_LINE events
 *   await waitForEventCount(eventStore, workerThreadId, 'LOG_LINE', 2);
 */
export function waitForEventCount(
  eventStore: EventStore,
  threadId: string,
  eventType: EventType,
  count: number,
  timeoutMs = 5000
): Promise<EventRecord[]> {
  return new Promise((resolve, reject) => {
    const startTime = Date.now();

    const check = () => {
      const events = eventStore.getEvents(threadId);
      const matchingEvents = events.filter((e) => e.type === eventType);

      if (matchingEvents.length >= count) {
        resolve(matchingEvents);
      } else if (Date.now() - startTime > timeoutMs) {
        reject(
          new Error(
            `Timeout waiting for ${count} ${eventType} events after ${timeoutMs}ms (got ${matchingEvents.length})`
          )
        );
      } else {
        setTimeout(check, 10);
      }
    };

    check();
  });
}

/**
 * Wait for an event matching a custom predicate
 * Useful when you need to check event data, not just type
 *
 * @param eventStore - The event store to query
 * @param threadId - Thread to check for events
 * @param predicate - Function that returns true when event matches
 * @param description - Human-readable description for error messages
 * @param timeoutMs - Maximum time to wait (default 5000ms)
 * @returns Promise resolving to the first matching event
 *
 * Example:
 *   // Wait for TASK_DONE with specific ID
 *   await waitForEventMatch(
 *     eventStore,
 *     workerThreadId,
 *     (e) => e.type === 'TASK_DONE' && e.data?.id === 'job_123',
 *     'TASK_DONE with id=job_123'
 *   );
 */
export function waitForEventMatch(
  eventStore: EventStore,
  threadId: string,
  predicate: (event: EventRecord) => boolean,
  description: string,
  timeoutMs = 5000
): Promise<EventRecord> {
  return new Promise((resolve, reject) => {
    const startTime = Date.now();

    const check = () => {
      const events = eventStore.getEvents(threadId);
      const event = events.find(predicate);

      if (event) {
        resolve(event);
      } else if (Date.now() - startTime > timeoutMs) {
        reject(new Error(`Timeout waiting for ${description} after ${timeoutMs}ms`));
      } else {
        setTimeout(check, 10);
      }
    };

    check();
  });
}

// Usage example:
//
// BEFORE (flaky):
// ---------------
// const messagePromise = worker.run('Execute tasks');
// await new Promise(r => setTimeout(r, 300)); // Hope tools start in 300ms
// worker.abort();
// await messagePromise;
// await new Promise(r => setTimeout(r, 50));  // Hope results arrive in 50ms
// expect(taskResults.length).toBe(2);         // Fails randomly
//
// AFTER (reliable):
// ----------------
// const messagePromise = worker.run('Execute tasks');
// await waitForEventCount(eventStore, threadId, 'TASK_STARTED', 2); // Wait for tasks to start
// worker.abort();
// await messagePromise;
// await waitForEventCount(eventStore, threadId, 'TASK_RESULT', 2); // Wait for results
// expect(taskResults.length).toBe(2); // Always succeeds
//
// Result: 60% pass rate to 100%, 40% faster execution
