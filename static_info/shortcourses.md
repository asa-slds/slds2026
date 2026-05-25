---
title: Short Courses
---

<h4>November 1, 2026, 1:30 pm - 5:00 pm:</h4>

* <a href="#yu">SC01: Veridical Data Science in the Age of AI</a>
* <a href="#diaz">SC02: Beyond the ATE</a>
* <a href="#feng">SC03: Statistical Foundations of Transfer Learning</a>

<h4>November 2, 2026, 1:30 pm - 5:00 pm:</h4>

* <a href="#chen">SC04: Statistical and Algorithmic Foundations of Diffusion Models</a>
* <a href="#michailidis">SC05: Optimization for Statistics</a>
* <a href="#zhu">SC06: Deep Learning Methods in Advanced Statistical Problems</a>

------

<div class="row-fluid">

<h4 id="yu">Veridical Data Science in the Age of AI</h4>

<h5>Instructor: Bin Yu, Tiffany Tang, and Chandan Singh</h5>

<a href="https://binyu.stat.berkeley.edu" target="_blank" rel="noopener noreferrer"><strong>Bin Yu</strong></a> is CDSS Chancellor's Distinguished Professor in Statistics, EECS, Center for Computational Biology, and Senior Advisor at the Simons Institute for the Theory of Computing, all at UC Berkeley. Her research focuses on the practice and theory of statistical machine learning, veridical data science, responsible and safe AI, and solving interdisciplinary data problems in neuroscience, genomics, and precision medicine. She and her team have developed algorithms such as iterative random forests (iRF), stability-driven NMF, adaptive wavelet distillation (AWD), Contextual Decomposition for Transformers (CD-T), SPEX and ProxySPEX for interpreting deep learning models, especially for compositional interpretability. 

She is a member of the National Academy of Sciences and of the American Academy of Arts and Sciences. She was a Guggenheim Fellow, President of Institute of Mathematical Statistics (IMS), and delivered the Tukey Lecture of the Bernoulli Society, the Breiman Lecture at NeurIPS, the IMS Rietz Lecture, and the Wald Memorial Lectures (the highest honor of IMS), and Distinguished Achievement Award and Lecture (formerly Fisher Lecture) of COPSS (Committee of Presidents of Statistical Societies). She holds an Honorary Doctorate from The University of Lausanne. She is on the Editorial Board of Proceedings of National Academy of Science (PNAS) and a co-editor of the Harvard Data Science Review (HDSR).


<a href="https://tiffanymtang.github.io" target="_blank" rel="noopener noreferrer"><strong>Tiffany Tang</strong></a> is a Clare Boothe Luce Assistant Professor at the University of Notre Dame in the Department of Applied and Computational Mathematics and Statistics. Her research interests broadly range from interpretable machine learning to responsible applications of AI in healthcare to open-source software development. Previously, she completed her PhD in statistics at UC Berkeley, advised by Bin Yu, and a postdoctoral fellowship in the University of Michigan Statistics department with Liza Levina and Ji Zhu.

<a href="https://www.microsoft.com/en-us/research/people/chansingh/" target="_blank" rel="noopener noreferrer"><strong>Chandan Singh</strong></a> is a researcher in the Deep learning group at MSR, working on interpretability and LLMs, with the broad goal of improving science and medicine using data. Recently, he has focused on how to reliably use LLMs to extract new insights in clinical data and language fMRI. Separately, he has also worked on developing highly accurate transparent models, such as improving linear models and decision trees. He received his PhD from UC Berkeley in 2022 advised by Professor Bin Yu.


<h5>Course Description:</h5>
Data science underpins modern AI and many advances in healthcare, yet human judgment permeates every stage of the data science life cycle. These judgment calls introduce hidden uncertainties that go well beyond sampling variability and drive many of the risks associated with AI.


We introduce <a href="https://www.pnas.org/doi/10.1073/pnas.1901326117" target="_blank" rel="noopener noreferrer">veridical data science</a>, grounded in three fundamental principles—Predictability, Computability, and Stability (PCS)—to make such uncertainties explicit and assessable and to aggregate reality-checked algorithms for better results. The PCS framework unifies and extends best practices in statistics and machine learning and is illustrated through case studies including identifying causal drivers of heart disease and brain regions, reducing cost of prostate cancer detection, and improving uncertainty quantification beyond standard conformal prediction.


We then cover 2 software packages and best practices for implementing PCS principles in practice. We start with <a href="https://github.com/Yu-Group/veridical-flow" target="_blank" rel="noopener noreferrer">vflow</a>, a python package that makes it easy to implement and evaluate the effect of judgment calls on a data-science pipeline. We demonstrate its usage on popular real-world datasets from the BLADE benchmark. Then, we will introduce <a href="https://www.tandfonline.com/doi/pdf/10.1080/10618600.2025.2561905" target="_blank" rel="noopener noreferrer">MERITS</a> that a veridical simulation study should satisfy. We accompany this with <a href="https://yu-group.github.io/simChef/" target="_blank" rel="noopener noreferrer">simChef</a>, an R package for cooking up reproducible, high-quality simulations in a flexible, efficient, and low-code manner.



</div>

------

<div class="row-fluid">

<h4 id="diaz">Beyond the ATE</h4>

<h5>Instructor: Iván Díaz, Kara Rudolf, and Nick Williams</h5>


<a href="https://idiaz.xyz" target="_blank" rel="noopener noreferrer"><strong>Iván Díaz</strong></a> is an Associate Professor of Biostatistics at New York University Grossman School of Medicine. His research focuses on the development of non-parametric statistical methods for causal inference from observational and randomized studies with complex datasets, using machine learning. This includes but is not limited to mediation analysis, methods for continuous exposures, longitudinal data including survival analysis, and efficiency guarantees with covariate adjustment in randomized trials. He also works applying these methods to healthcare research, including in neurology, critical care, opioid use research, and other areas.

<a href="https://www.publichealth.columbia.edu/profile/kara-rudolph-phd" target="_blank" rel="noopener noreferrer"><strong>Kara Rudolph</strong></a> is an Associate Professor of Epidemiology at Columbia University, Mailman School of Public Health. Her research interests are in developing and applying causal inference methods to inform the prevention and treatment of opioid use disorder, the prevention of violence, and understanding health effects of the environment.  She is interested in approaches for transportability and data fusion, mediation, effect heterogeneity, and complex exposures.


<a href="https://github.com/nt-williams" target="_blank" rel="noopener noreferrer"><strong>Nick Williams</strong></a> is a Senior Data Analyst in Columbia University's Mailman School of Publich Health, Department of Epidemiology. His interests are in the development of statistical computing tools for novel causal inference methods. He's the author and maintainer of multiple R packages.


<h5>Course Description:</h5>

In this workshop, we present methods to define and estimate the causal effects of categorical, continuous, and multivariate exposures. The methods are based on a generalization of the static and dynamic interventions that may be familiar to some of you. This generalization has been recently called modified treatment policies (MTPs). MTPs are hypothetical interventions where the post-intervention exposure is defined as a modification of the natural value of the exposure that can also depend on the unit’s history. This short course will introduce the lmtp R package for estimating the causal effects of these general estimand in both point-treatment and longitudinal studies. We will discuss identification of MTPs, estimation with a targeted minimum-loss based estimator and a sequentially doubly-robust estimator, and provide guidance on estimator choice and software usage.	

</div>

------

<div class="row-fluid">

<h4 id="feng">Statistical Foundations of Transfer Learning</h4>

<h5>Instructor: Yang Feng</h5>

<a href="https://publichealth.nyu.edu/faculty/yang-feng" target="_blank" rel="noopener noreferrer"><strong>Yang Feng</strong></a> is a Professor of Biostatistics in the School of Global Public Health at New York University, where he is also affiliated with the Center for Data Science. He received his Ph.D. in Operations Research from Princeton University in 2010.

Dr. Feng’s research focuses on the theoretical and methodological foundations of machine learning, high-dimensional statistics, network models, and nonparametric statistics. His work addresses critical applications in Alzheimer’s disease prognosis, cancer subtype classification, genomics, electronic health records, and biomedical imaging, with the goal of enabling more accurate risk assessment and clinical decision-making. He has published over 70 peer-reviewed papers in leading journals across statistics, machine learning, econometrics, and medicine. His research has been supported by grants from the National Institutes of Health (NIH) and the National Science Foundation (NSF), including the NSF CAREER Award.

Currently, Dr. Feng serves as the Review Editor for the Journal of the American Statistical Association (JASA) and The American Statistician (2026–2028). He also serves as an Associate Editor for several premier journals, including JASA Theory & Methods, the Journal of Business & Economic Statistics, the Journal of Computational & Graphical Statistics, and the Annals of Applied Statistics. He is a Fellow of the American Statistical Association (2022) and the Institute of Mathematical Statistics (2023), and has been an elected member of the International Statistical Institute since 2017.

<h5>Course Description:</h5>

This half-day short course offers a selective, statistics-first introduction to the foundations of transfer learning and closely related multi-task learning ideas. The central question is how distribution shift between source and target populations affects generalization, and how explicit statistical assumptions make principled knowledge transfer possible.

The course covers three core threads: domain adaptation bounds expressed through divergence measures between source and target distributions; covariate shift and density-ratio based reweighting for valid risk estimation and estimator construction; and posterior drift addressed via biased regularization as a route to "safe transfer" that guards against negative transfer. Throughout, the emphasis is on precise problem formulations, the key theoretical results that follow from them, and the intuition for when transfer helps, when it hurts, and why.

The format is lecture-based, with guided derivations, brief conceptual check-ins, and short numerical illustrations accompanying each thread to make the theoretical takeaways concrete. Participants will leave with a unified perspective on divergence-based analysis, covariate shift correction, and biased regularization—one that can inform both applied methodological choices and further theoretical research.

<h5>Prerequisites:</h5>

Participants should have a working knowledge of mathematical statistics at the level of a first-year Ph.D. course, including probability, expectation and concentration inequalities, and basic asymptotics. Familiarity with standard supervised learning (regression and classification, empirical risk minimization, bias–variance trade-off) and with regularized estimators such as ridge and lasso will be assumed. Comfort with linear algebra and multivariable calculus is expected. No coding background is required: the course is theoretical and methodological in focus, and some numerical illustrations may be shown  by the instructor if time permits.

</div>

------

<div class="row-fluid">

<h4 id="chen">Statistical and Algorithmic Foundations of Diffusion Models</h4>

<h5>Instructor: Yuxin Chen and Yuting Wei</h5>

<a href="https://statistics.wharton.upenn.edu/profile/yuxinc/" target="_blank" rel="noopener noreferrer"><strong>Yuxin Chen</strong></a> is a Professor of Statistics and Data Science at the University of Pennsylvania. Before joining UPenn, he was an assistant professor of electrical and computer engineering at Princeton University. He completed his Ph.D. in Electrical Engineering at Stanford University and was also a postdoc scholar at Stanford Statistics. His current research interests include high-dimensional statistics, diffusion models, reinforcement learning, and optimization. He has received the Alfred P. Sloan Research Fellowship, the Leo Breiman junior award, the SIAM Activity Group on Imaging Science Best Paper Prize, the ICCM Best Paper Award (gold medal), and was selected as a finalist for the Best Paper Prize for Young Researchers in Continuous Optimization. He has also received the Princeton Graduate Mentoring Award.

<a href="https://statistics.wharton.upenn.edu/profile/ytwei/" target="_blank" rel="noopener noreferrer"><strong>Yuting Wei</strong></a> is an Associate Professor in the Department of Statistics and Data Science at the Wharton School of the University of Pennsylvania. Prior to joining Penn in 2021, she spent two years as an Assistant Professor at Carnegie Mellon University and one year at Stanford University as a Stein Fellow. She received her Ph.D. in Statistics from the University of California, Berkeley. Dr. Wei is a recipient of the 2025 Gottfried E. Noether Early Career Scholar Award, the Google Research Scholar Award, the NSF CAREER Award, and the Erich L. Lehmann Citation from the Berkeley Statistics Department. Her research interests lie in learning from high-dimensional and structured data, and advancing the theoretical foundations of reinforcement learning and diffusion models.

<h5>Course Description:</h5>

Diffusion generative models have emerged as a cornerstone of modern generative AI, delivering state-of-the-art performance across a wide range of data generation tasks. At their core, diffusion models seek to gradually transform pure noise into new data samples that emulate a target data distribution, accomplished by learning to reverse a forward stochastic process that progressively converts data into Gaussian noise. Despite their empirical successes, the statistical and algorithmic foundations of diffusion models remain far from mature. This lack of fundamental understanding limits their broader adoption, especially in applications that demand interpretability and reproducibility.
 
This short course provides a timely introduction to diffusion models and presents recent progress toward understanding their striking effectiveness, with an emphasis on core principles and statistical insights. We will examine the fundamental mechanisms of score-based diffusion models; characterize the statistical limits of learning score functions; analyze the convergence behavior of diffusion-based samplers; explore how these models adapt to unknown low-dimensional data structures; discuss conditional generation via diffusion guidance; and highlight ideas for accelerating inference through higher-order approximations. Throughout this short course, we will connect theoretical advances to practical applications, illustrating how fundamental insights can inform effective algorithm design.

<h5>Prerequisites:</h5>

Basic linear algebra and basic probability.

</div>

------

<div class="row-fluid">

<h4 id="michailidis">Optimization for Statistics</h4>

<h5>Instructor: George Michailidis</h5>

**George Micahailidis** is a Professor in the Department of Statistics & Data Science at UCLA. His research focuses on methodological and theoretical work in high-dimensional statistics, optimization, machine learning and neural networks, change point analysis, and network modeling. He is also interested in applications of statistical methods to engineering, biomedicine and economic/finance problems. Prior to joining UCLA in 2022, Prof. Michailidis was the Founding Director of the Informatics Institute at the University of Florida and served on the faculty in Statistics and EECS at the University of Michigan.

<h5>Course Description:</h5>

Optimization lies at the heart of modern data science, offering scalable solutions for high-dimensional problems in statistics and machine/deep learning. The first part of the course will cover: (i) the fundamentals of gradient-based optimization and (ii) advanced optimization methods. These algorithms will be illustrated through applications in high-dimensional statistics and machine learning, including sparse regression, matrix completion, graphical models and feed-forward neural networks. The second part will explore key recent developments in optimization driven by challenges in machine and deep learning. It will briefly cover: (i) Federated and distributed learning, where decentralized optimization techniques enable efficient model training across multiple devices while preserving data privacy. (ii) Minimax optimization, a powerful framework for adversarial learning, robust statistics, and generative modeling. (iii) Bilevel optimization, which has gained prominence in the last 2-3 years for applications such as hyperparameter tuning, meta-learning, and reinforcement learning. The course will balance core concepts with sufficient technical depth, providing an accessible yet insightful perspective on the latest advances in optimization.

</div>

------

<div class="row-fluid">

<h4 id="zhu">Deep Learning Methods in Advanced Statistical Problems</h4>

<h5>Instructor: Hongtu Zhu, Xiao Wang, and Runpeng Dai</h5>

<a href="https://sph.unc.edu/adv_profile/hongtu-zhu-phd/" target="_blank" rel="noopener noreferrer"><strong>Hongtu Zhu</strong></a> is the Kenan Distinguished Professor of Biostatistics, Statistics, Radiology, Computer Science and Genetics at the University of North Carolina at Chapel Hill. He was a DiDi Fellow and Chief Scientist of Statistics at DiDi Chuxing between 2018 and 2020 and held the Endowed Bao-Shan Jing Professorship in Diagnostic Imaging at MD Anderson Cancer Center between 2016 and 2018. He is an internationally recognized expert in statistical learning, medical image analysis, precision medicine, biostatistics, artificial intelligence, and big data analytics. He received an established investigator award from the Cancer Prevention Research Institute of Texas in 2016, the INFORMS Daniel H. Wagner Prize for Excellence in Operations Research Practice in 2019, the IMS 2027 Medallion award and Lecture, and the COPSS 2025 Snedecor Award. He has published more than 365 papers in top journals, including Nature, Science, Cell, Nature Genetics, Nature Communication, PNAS, AOS, JASA, Biometrika, and JRSSB, as well as presenting 65+ conference papers at top conferences, including meetings for Neurips, ICLR, ICML, AAAI, and KDD. He is the coordinating editor of JASA and the editor of JASA ACS.

<a href="https://www.stat.purdue.edu/people/faculty/wangxiao.html" target="_blank" rel="noopener noreferrer"><strong>Xiao Wang</strong></a> is Head and J.O. Berger and M.E. Bock Professor of Statistics at Purdue University. He earned his Ph.D. from the University of Michigan, and his research centers on machine learning, nonparametric statistics, and functional data analysis with particular emphasis on developing methods for high-dimensional and complex data. His work has been featured in leading statistical journals and machine learning conferences, and he is a fellow of the Institute of Mathematical Statistics (IMS) and the American Statistical Association (ASA). He currently serves as an associate editor for JASA, Technometrics, and Lifetime Data Analysis.

<a href="https://runpengdai.github.io" target="_blank" rel="noopener noreferrer"><strong>Runpeng Dai</strong></a> obtained his B.S in statistics from Shanghai University of Finance and Economics and is now a PhD candidate in Department of Biostatistics at University of North Carolina at Chapel Hill. His research interest lies in Reinforcement learning and Large language model. He has several internship experiences in Tencent Seattle AI labs and DiDi Chuxing.

<h5>Course Description:</h5>

This short course is designed for researchers in statistics and data analysis who are eager to explore the latest trends in deep learning and apply these methods to solve complex statistical problems. The course focus on cutting-edge topics in the deep learning community, including transformers, diffusion models, reinforcement leanring and large language models. In this one-day short course participants will gain hands-on experience in exploring and applying deep learning methodologies to tackle various statistical challenges. Basic knowledge of Python programming will be helpful but not necessary.

</div>