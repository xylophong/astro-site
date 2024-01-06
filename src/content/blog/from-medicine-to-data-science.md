---
author: Dinh-Phong Nguyen
pubDatetime: 2018-04-05
title: From medicine to data science
featured: false
draft: false
tags: [medicine, data science, books]
description: Useful resources to catch up on data science fundamentals when coming from medicine
---

Massive amounts of healthcare data are generated everyday in public hospitals, most of which are sitting untouched in storage. It is especially true here in France, where data access policies are pretty strict, electronic health records (EHR) pretty new, and hospital-employed data scientists pretty non-existant (well, let's see what will change in the future with the recent announcements of our president and [Rapport Villani](https://www.aiforhumanity.fr/en/)). Among other reasons, this realization led me to where I am today; I recently — yesterday in fact — finished an [MSc in Data Science](https://datascience-x-master-paris-saclay.fr/) at Ecole Polytechnique and Université Paris-Saclay, and am planning to put what I've learned to unravel the mysteries hidden in all this dormant data.

As this is my first post on this blog, it will also serve as a brief introduction to my background. After medical school, tired of numbingly learning books by heart, I chose to pursue a residency in Public Health and Social Medicine to do a little more maths than other specialties allowed. My first year was divided into two research internships, one in biostatistics and one in epidemiology. In both, on top of being inspired by great mentors, I discovered how properly handled data could give powerful insights and have a huge impact on people's health and well-being. I also realized how scarce "new" statistical approaches (ie. machine learning, deep learning) were to be found in actual studies and real-life applications. By that time, I'd already heard of a solid MSc in Data Science given by one of our top schools, sent my application, and voilà, here I am today, eager to start my new internship next week doing research on adverse drug reaction detection in large databases. More on that later.

This year taught me tremendous amounts of knowledge, but it was hard. Very hard. The fact that I was actually accepted in an applied maths curriculum still surprises me to this day; coming from medicine (which you start right after high school in France), I did not meet the mathematical nor programming prerequisites. Sure, I did spend a year working on statistical analyses, and at that time I thought that I was ready to go deeper, but I soon realized how much I lacked in terms mathematical foundations to truly get the most of out my Data Science MSc.

Having spent the summer digging out good resources to get me to a decent level in a limited amount of time, I figured I would start this blog by sharing what helped me preparing this year and getting through it alive (spoiler: I even enjoyed it). I will list in no specific order some of the courses I had, and the relevant associated resources linked underneath.

## Convex Optimization

Convex optimization was one of the hardest subjects for me this year, drawing heavily from both the fields of analysis and linear algebra. It was also my very first lecture this year, which set the pace for what was to come.

- **Grant Sanderson's** video channel [3blue1brown](http://www.3blue1brown.com/about/) — probably the most helpful resource of this whole post. I first discovered his videos on [Khan Academy](https://fr.khanacademy.org/), when looking for a course on linear algebra. He is a passionate mathematician who has a talent for giving visual intuitions on complicated mathematical notions. I keep on coming back to his videos whenever I need an explanation on anything he's covered.

- **Convex Optimization** by _Stephen Boyd_ and _Lieven Vandenberghe_ — this [book](https://web.stanford.edu/~boyd/cvxbook/) was recommended by our teachers. It's a good book, but I admit that the most helpful part was actually the Appendix: it's a great summary of the mathematical background needed to follow an optimization course.

- **The Matrix Cookbook** by _Kaare Brandt Petersen_ and _Michael Syskind Pedersen_ — this [book](http://www2.imm.dtu.dk/pubdb/views/edoc_download.php/3274/pdf/imm3274.pdf) was my cheatsheet for any matrix related manipulation

- **Fabian Pedregosa's** [blog](http://fa.bianp.net/) — lots of useful posts that were key for me to understand some of my lectures. Also, a useful [inequalities cheatsheet](http://fa.bianp.net/blog/2017/optimization-inequalities-cheatsheet/) for exercises and exams.

## Probabilistic Graphical Models / Bayesian Statistics

Those two subjects were heavily based on a very famous book in the data science field.

- **Pattern recognition and Machine Learning** by _Christopher Bishop_ — do not be scared by the size of this [book](https://www.microsoft.com/en-us/research/people/cmbishop/#!prml-book?from=http%3A%2F%2Fresearch.microsoft.com%2F~cmbishop%2Fprml%2Findex.htm). It's a well-written one that starts from the basics. Hopefully, you won't need to read it all in one go (I didn't), and the most helpul chapters were the ones about Gaussian Mixture, Variational Bayesian inference and Markov Chain Monte Carlo (MCMC) methods.

## Machine Learning

- **Data Science from Scratch** by _Joel Grus_ — the author dives into each of the widely used machine learning models, coding everything in base Python and Numpy from scratch. It's a very helpful way, if not the best, to understand how the models work. It is also a good way to learn Python best practices. All code available on the author's associated [github repository](https://github.com/joelgrus/data-science-from-scratch).

## Speech, Text and Natural Language Processing

- **Speech and Language Processing** by _Dan Jurafsky_ and _James H. Martin_ — it was the [book](https://web.stanford.edu/~jurafsky/slp3/) recommended by the teachers and the chapters on parsing (from 11 to 14) were really useful when we tackled the subject.

- **NLTK book** by _Steven Bird_, _Ewan Klein_, and _Edward Loper_ — `NLTK` is one of the most widely used package for natural language processing (NLP) in Python. The autors have written a book commonly referred as ["The NLTK book"](http://www.nltk.org/book/) which is a great introduction to NLP with NLTK (obviously).

## Deep Learning

- **The course's github repo** by _Olivier Grisel_ and _Charles Ollion_ — the teachers did an impressive work, updating slides every week to integrate fresh publications and building very didactic and detailed Jupyter notebooks; I can't imagine a better introduction to deep learning. They made everything freely available [here](https://github.com/m2dsupsdlclass/lectures-labs).

- **Deep Learning with Python** by _François Chollet_ — the easiest way to start programming deep architectures is with a package called `keras`, and its creator wrote a really practical [book](https://www.manning.com/books/deep-learning-with-python) about it, which goes from the basics to implementing state-of-the-art models in some fields. A solid complement to the class great materials.

- **Distill** — fundamental papers that explore new ways of publishing in the web era (getting away from static PDFs). All the published articles are very accessible and well-written, but their most notable features are their stunning interactive visualizations. This [paper](https://distill.pub/2017/momentum/) on momentum is amazing.

- **Twitter** — it might come as a surprise for some, but as advised by someone, I created an account this year to follow the activity of researchers of interest. I didn't expect much from it, but boy was I wrong; there are so many interesting discussions going on, that are both high-level and concise (because of the character limit). Moreover, it is an effortless (more or less) way to keep track of the daily evolving field of deep learning.

- **The Matrix Calculus You Need for Deep Learning** by _Terence Parr_ and _Jeremy Howard_ — this is a perfect example of what I've found thanks to Twitter. I actually read it after the course finished, but this [paper](https://arxiv.org/abs/1802.01528) is definitely something I wish I'd found at the beginning.

## Learning with Agregation

- **Prediction, Learning and Games** by _Nicolò Cesa-Bianchi_ and _Gabor Lugosi_ — the [book](http://homes.dsi.unimi.it/~cesabian/predbook/) of reference in the field, with progressive build-up and easy-to-follow proofs. Aiming to predict as well as the best out of a bunch of predictors for one or multiple tasks is really fun.

## Compressed Sensing

One of the most interesting subject this year, grounded in solid maths and with a lot of cool applications such as medical magnetic resonance imaging (MRI) or matrix completion (the so called _Netflix problem_).

- **The course's lecture notes** by _Guillaume Lecué_ — these [notes](http://lecueguillaume.github.io/2015/10/08/compressed_sensing_course/) were of great quality, although written in French. Still, if you can understand them, by all means have look, they're cristal clear.

- **Michael Lustig's website** — he is an associate professor as UC Berkeley, and has worked a lot on the applications of compressed sensing in MRI. His website has a lot of useful resources, links to seminal papers and exercises to play with.

## Kernel Methods for Machine Learning

- **The course's slides** by _Jean-Philippe Vert_ and _Julien Mairal_ — these [slides](http://members.cbio.mines-paristech.fr/~jvert/svn/kernelcourse/course/2018mva/index.html) are really well-made and are self-contained; I usually hate reading slides when I study for exams, but those were the exception.

And that's it. Those were the resources that helped me make sense of what I was taught during lectures, and I'm sure I'll come back to them on a regular basis. Do not hesitate to add other links in the comment section, I'm always in the lookout for great teaching content to learn from.
