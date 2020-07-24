
---
title: "ICOMIC"
date: 2020-07-21T14:36:48+05:30
tags: ["NGS","cancer","genomics","ML"]
categories: ["Projects"]
authors: "Anjana Anilkumar S"
name: "anjana-anilkumar-s"
images:
  - /images/research/iCOMIC.png
draft: false
---

***

**iCOMIC: a graphical interface-driven pipeline for cancer genome data analysis workflows**,
The rapid advancement in next-generation technology.

### The rapid advancement in next-generation technology has made a tremendous impact on genome-based research. Analysis of the large amount of data generated can be tricky as it demands expertise in bioinformatics and computer terminal commands. Even though many software’s are available for genomic data analysis, a comprehensive toolkit incorporating a considerable number of tools is missing. In order to tackle this problem to an extent, we are developing iCOMIC with a user-friendly Graphical User Interface incorporating multiple pipelines for whole genome/exome sequencing and RNA-Seq data analysis. The tools are connected together using the workflow manager Snakemake and the GUI framework is built using PyQt5, python binding of Qt. iCOMIC serves as a platform to analyze genomic data for researchers with minimal programming skills and as a tool to perform analysis incorporating advanced parameters for expert bioinformaticians. The tool is more like a point click application where the user can input raw sequencing data, choose the tools of interest, set the parameters and will get back annotated vcf files in case of WGS/WES pipelines and list of differentially expressed genes in case of RNA-Seq data. Finally, we will be integrating machine learning models to predict cancer driver genes. ###