---
title: "Causal Gene Networks"
date: 2020-07-21T14:39:35+05:30
tags: ["networks","ML"]
categories: ["Advanced Research"]
authors: "Manikandan Narayanan"
name: "manikandan-narayanan"
images:
  - /images/research/causal-gene-networks.png
draft: false
---
***
# **Robust discovery of causal gene networks via measurement error estimation and correction, Discovering causal relations among genes from observational data is a fundamental problem.** #

### Discovering causal relations among genes from observational data is a fundamental problem in systems biology, especially in humans where direct gene perturbations are unethical/infeasible. **“Mediation or Mendelian-Randomization”** based methods can infer causality from gene expression and matched genotype data, but expression measurement errors are prevalent (e.g.,RNA-seq counts of low/moderate expressed genes) and can mislead most such methods into making wrong causal inferences. ###

### We propose a two-step framework to discover causal gene networks under measurement noise. The first step predicts the variance of measurement errors in RNA-seq read counts of all genes when no technical replicates are available, with a machine learning model trained on gene/sample-specific features (like average expression, gene length, GC content). Our framework’s second step incorporates the estimated measurement errors to correct/extend mediation-based causality methods like **CIT**. For instance, our newly proposed RobustCIT method conducts four regression-based statistical tests verifying a chain of conditions of causality as the original **CIT**, but with regression coefficients, residuals and associated P-values appropriately corrected using measurement error variance.