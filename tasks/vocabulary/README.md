# Vocabulary test

Author(s): Sam Zorowitz

A jsPsych implementation of the 20-item [test my brain](https://www.testmybrain.org/tests/wordsum/index_v3e.html) vocabulary test. Original code available on [OSF](https://osf.io/w7jgv/).

## Psychometrics

Because trial-level data are not available from the Test My Brain study, Sam Zorowitz collected a small dataset (N=198 Prolific users) to measure the psychometrics of the vocabulary test. 

Of the twenty items, 15 showed reasonable variability in accuracy levels. Five items (i.e. "cruel", "truth", "chuckle", "dreary", "rejoice") showed accuracy at or near ceiling. Item response modeling found that the majority of items had good discrimination (<img src="https://render.githubusercontent.com/render/math?math=\alpha > 1">). Moreover, we observed a positive correlation between item difficulty and discrimination, such that more challenging items tended to be more disriminating. 

Using `lavaan` and `semTools` in R, the estimated ordinal reliability of the vocabulary test was rho = 0.876. The distribution of participants' total scores were found to be similar to those observed in Hartshorne & Germine (2015), with the vast majority of scores falling in the range [10, 20].

For more details, contact Sam Zorowitz.

## References
- Hartshorne, J. K., & Germine, L. T. (2015). When does cognitive functioning peak? The asynchronous rise and fall of different cognitive abilities across the life span. Psychological science, 26(4), 433-443.
- Passell, E., Dillon, D. G., Baker, J. T., Vogel, S. C., Scheuer, L. S., Mirin, N. L., ... & Germine, L. (2019). Digital cognitive assessment: Results from the TestMyBrain NIMH Research Domain Criteria (RDoC) field test battery report. https://psyarxiv.com/dcszr/.
