---
#preview
title: "MIT researchers advance automated interpretability in AI models"
date: "2022-04-02"
image: "/img/covers/multimodal-automated-interpretability-agent.jpg"
categories:
  - Urban
tags:
  - Branding
  - UI
  - Design
author: Nguta Ithya
short: MAIA is a multimodal agent that can iteratively design experiments to better understand various components of AI systems.

#full details
introTitle: MIT researchers advance automated interpretability in AI models
---

As artificial intelligence models become increasingly prevalent and are integrated into diverse sectors like health care, finance, education, transportation, and entertainment, understanding how they work under the hood is critical. Interpreting the mechanisms underlying AI models enables us to audit them for safety and biases, with the potential to deepen our understanding of the science behind intelligence itself.

###### Neuron by neuron

In one example task, a human user asks MAIA to describe the concepts that a particular neuron inside a vision model is responsible for detecting. To investigate this question, MAIA first uses a tool that retrieves “dataset exemplars” from the ImageNet dataset, which maximally activate the neuron. For this example neuron, those images show people in formal attire, and closeups of their chins and necks. MAIA makes various hypotheses for what drives the neuron’s activity: facial expressions, chins, or neckties. MAIA then uses its tools to design experiments to test each hypothesis individually by generating and editing synthetic images — in one experiment, adding a bow tie to an image of a human face increases the neuron’s response. “This approach allows us to determine the specific cause of the neuron’s activity, much like a real scientific experiment,” says Rott Shaham.

MAIA’s explanations of neuron behaviors are evaluated in two key ways. First, synthetic systems with known ground-truth behaviors are used to assess the accuracy of MAIA’s interpretations. Second, for “real” neurons inside trained AI systems with no ground-truth descriptions, the authors design a new automated evaluation protocol that measures how well MAIA’s descriptions predict neuron behavior on unseen data.

The CSAIL-led method outperformed baseline methods describing individual neurons in a variety of vision models such as ResNet, CLIP, and the vision transformer DINO. MAIA also performed well on the new dataset of synthetic neurons with known ground-truth descriptions. For both the real and synthetic systems, the descriptions were often on par with descriptions written by human experts.

How are descriptions of AI system components, like individual neurons, useful? “Understanding and localizing behaviors inside large AI systems is a key part of auditing these systems for safety before they’re deployed — in some of our experiments, we show how MAIA can be used to find neurons with unwanted behaviors and remove these behaviors from a model,” says Schwettmann. “We’re building toward a more resilient AI ecosystem where tools for understanding and monitoring AI systems keep pace with system scaling, enabling us to investigate and hopefully understand unforeseen challenges introduced by new models.”
