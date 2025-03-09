---
title: Conditional Probability and Law of Independence
date: 2023-10-27
tags:
  - statistics
categories:
  - Concept
---
# Analysis of Statistics Problem Sheet 4  
The problem sheet primarily focuses on **Conditional Probability, Independence, and the Law of Total Probability**. Below is a summary of key concepts along with brief explanations and small examples.

---

## Key Concepts and Their Explanations

### 1. Conditional Probability  
Conditional probability measures the probability of an event occurring given that another event has already occurred. It is defined as:  

$$
P(A \mid B) = \frac{P(A \cap B)}{P(B)}
$$  

where:  
- $P(A \mid B)$ is the probability of $A$ given $B$,  
- $P(A \cap B)$ is the probability of both $A$ and $B$ happening together,  
- $P(B)$ is the probability of $B$.  

**Example:**  
A factory has 60% male and 40% female workers. If 30% of male workers smoke and 10% of female workers smoke, what is the probability that a randomly chosen smoker is female?  

Using Bayes' Theorem:  
$$
P(F \mid S) = \frac{P(S \mid F) P(F)}{P(S)} = \frac{0.1 \times 0.4}{(0.1 \times 0.4) + (0.3 \times 0.6)} = \frac{0.04}{0.22} \approx 0.1818
$$  

---

### 2. Law of Total Probability  
This law allows us to find the probability of an event by considering all possible ways it can occur. It states:  

$$
P(H) = \sum_{i} P(H \mid A_i) P(A_i)
$$  

**Example:**  
An engine fails due to:  
- Ignition issues ($P(I) = 0.5$, service can help $P(H \mid I) = 0.6$),  
- Fuel supply issues ($P(F) = 0.3$, service can help $P(H \mid F) = 0.45$),  
- Other reasons ($P(O) = 0.2$, service can help $P(H \mid O) = 0.05$).  

Probability that the service helps:  
$$
P(H) = (0.6 \times 0.5) + (0.45 \times 0.3) + (0.05 \times 0.2) = 0.445
$$  

---

### 3. Inclusion-Exclusion Principle  
This principle helps find the probability of the union of multiple events while avoiding overcounting.  

For three events $A, B, C$:  
$$
P(A \cup B \cup C) = P(A) + P(B) + P(C) - P(A \cap B) - P(A \cap C) - P(B \cap C) + P(A \cap B \cap C)
$$  

**Example:**  
A store sells apples ($P(A) = 0.6$), bananas ($P(B) = 0.5$), and oranges ($P(C) = 0.4$). If:  
- $P(A \cap B) = 0.3$,  
- $P(A \cap C) = 0.2$,  
- $P(B \cap C) = 0.25$,  
- $P(A \cap B \cap C) = 0.1$,  

then:  
$$
P(A \cup B \cup C) = 0.6 + 0.5 + 0.4 - 0.3 - 0.2 - 0.25 + 0.1 = 0.85
$$  

---

### 4. Independent Events  
Two events $A$ and $B$ are independent if:  
$$
P(A \cap B) = P(A) \times P(B)
$$  

**Example:**  
Rolling a die ($P(\text{6}) = \frac{1}{6}$) and flipping a coin ($P(\text{Heads}) = \frac{1}{2}$) are independent.  
$$
P(\text{6} \cap \text{Heads}) = \frac{1}{6} \times \frac{1}{2} = \frac{1}{12}
$$  

---

### 5. Bayesian Probability  
Bayes' Theorem calculates the probability of an event given prior knowledge:  
$$
P(A \mid B) = \frac{P(B \mid A) P(A)}{P(B)}
$$  

**Example:**  
A test detects a rare disease ($P(D) = 0.0001$) with 99% accuracy for diseased people ($P(\text{Pos} \mid D) = 0.99$) and 95% accuracy for healthy people ($P(\text{Neg} \mid \neg D) = 0.95$).  

Probability of having the disease given a positive test result:  
$$
P(D \mid \text{Pos}) = \frac{0.99 \times 0.0001}{(0.99 \times 0.0001) + (0.05 \times 0.9999)} \approx 0.002
$$  