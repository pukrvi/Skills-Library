# Worked transformations

Five domains. Read these before rewriting — they show the *degree* of change required, which is usually larger than a first instinct suggests.

Note what happens in every pair: the rewrite is shorter, and it contains information the original didn't. That is not a coincidence. Slop is padding around a missing specific, so removing the padding exposes the gap, and the gap is what you flag or fill from source material.

---

## 1. B2B SaaS marketing

**Before**
> In today's fast-paced digital landscape, leveraging cloud-based solutions is crucial to unlock robust efficiency and foster seamless collaboration. Our state-of-the-art platform serves as a testament to innovation, empowering decision-makers to elevate operational excellence.

**After**
> Cloud software cuts team coordination costs. We built our platform to automate routine database tasks, so engineering managers ship code faster without tracking infrastructure by hand.

**What moved:** deleted the "In today's" opener; killed leveraging / crucial / unlock / robust / foster / seamless / state-of-the-art / serves as a testament / empowering / elevate / operational excellence; restored the copula; named the actual user (engineering managers) and the actual mechanism (automating routine database tasks).

---

## 2. Academic / historical

**Before**
> The subject's pivotal role in the revolution stands as a crucial milestone. Furthermore, delving into the intricacies of his legacy underscores a vibrant tapestry of leadership, showcasing his enduring impact.

**After**
> He led three tactical retreats during the 1789 uprising. His command held the army together through winter supply shortages, keeping the core fighting force intact until foreign aid arrived.

**What moved:** every abstraction replaced by an event. pivotal / crucial / delving / intricacies / underscores / vibrant / tapestry / showcasing / enduring all gone. Note the *specificity quota* doing the work: three retreats, 1789, winter supply shortages, foreign aid. The original said nothing checkable.

---

## 3. Corporate strategic brief

**Before**
> Navigating the complexities of market penetration requires a holistic approach. It is important to note that success is not just about aggressive sales, but also strategic alignment. In conclusion, adopting best practices will drive impact.

**After**
> Entering the European market requires local compliance clearance before hiring sales teams. Regulatory delays average six months. Signing distributor contracts early offsets that overhead.

**What moved:** negative parallelism ("not just about X, but also Y") rewritten as a direct claim; "It is important to note that" deleted; "In conclusion" deleted; navigating / complexities / holistic / strategic alignment / best practices / drive impact all cut. Added the specific: European market, six months, distributor contracts.

---

## 4. Product review

**Before**
> When it comes to hardware, this device functions as a game-changer. Featuring a robust chassis and seamless software integration, it promises to elevate user experience to new heights while fostering productivity.

**After**
> The aluminium frame resists flexing under pressure. Updated display drivers fixed the sleep-wake latency and added roughly forty minutes of battery life.

**What moved:** copula avoidance ("functions as", "featuring") restored; game-changer / robust / seamless / elevate / new heights / fostering cut. "When it comes to" deleted. Vague praise replaced with two testable claims.

---

## 5. LinkedIn / thought leadership

This register has its own failure mode: the formula set. The fix is not gentler wording, it is having something to say.

**Before**
> Most people use AI to move faster. The few who win use it to think deeper.
>
> Here's the truth: it's not about the tools — it's about the workflow. If you're not building repeatable systems yet, you're already behind.
>
> The real game isn't prompting. It's deciding which answers to keep. 🚀
>
> #AI #Productivity #FutureOfWork #Innovation #Leadership #Tech #Growth

**After**
> We cut our brief-writing time from four hours to forty minutes, and the quality got worse for the first three weeks.
>
> What fixed it wasn't a better prompt. It was a review step: one person reads every AI draft against the original call notes before it goes out. We catch about one fabricated detail per five briefs.
>
> The time saving is real. It just doesn't survive without the review step.
>
> #SalesEnablement

**What moved:** four of the nine LinkedIn formulas deleted (moralizing generalization, declared truth, doomer threat, invisible-layer glorification); one negative parallelism kept and earned because it now carries a real contrast with evidence behind it; emoji cut; seven hashtags cut to one specific tag. Added: four hours, forty minutes, three weeks, one in five.

---

## What a *good* second pass looks like

The most common failure after a first rewrite is that the flagged words are gone but the rhythm is still metronomic, or the editor has installed a humanizer voice.

**First-pass output (flags cleared, still wrong):**
> The platform automates database tasks. Engineering managers ship code faster. Manual infrastructure tracking is no longer needed. The result is a shorter release cycle.

Four sentences, 7/6/8/7 words. Sentence-length SD is 0.8. Every one is subject-verb-object. It reads like a specification, not a person.

**Second-pass output:**
> The platform automates the routine database work — schema migrations, index rebuilds, the backup checks nobody remembers to run. Engineering managers stop tracking infrastructure by hand, which is where most of the release delay was hiding.

Two sentences, 21 and 22 words, but with internal variation from the list and the subordinate clause. One em dash, well under the cap, doing genuine aside work. Added specifics that came from the source material, not from invention.

**What was NOT done:** no "I've seen this a hundred times", no "here's the thing", no manufactured stakes, no chopping into fragments to fake burstiness. Vary the sentences by varying the sentences.
