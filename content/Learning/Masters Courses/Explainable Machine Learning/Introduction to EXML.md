# Logistic Regression:

---
### **1. Computing the Log-Odds Using the Logit Function**
Logistic regression models the probability of an event happening ($P(y=1)$) using the **logit transformation**:

$$
\ln(\text{Odds}) = \ln \left( \frac{P(y=1)}{P(y=0)} \right) = \beta_0 + \beta_1 x_1 + \beta_2 x_2 + ... + \beta_p x_p
$$

This equation means:
- The **left-hand side (`log-odds`)** represents a transformed probability.
- The **right-hand side** is a **linear function** of the input features.
- Each **coefficient (`β`) represents how much the log-odds change** when a feature increases by 1 unit.

---

### **2. Interpreting the Coefficients in Log-Odds Form**
Each coefficient ($\beta$) **directly affects the log-odds**:

- If $\beta > 0$, increasing the feature **increases** the log-odds.
- If $\beta < 0$, increasing the feature **decreases** the log-odds.
- If $\beta = 0$, the feature has **no impact** on the prediction.

For example:
- **Cholesterol ($\beta = 0.493$)** → If cholesterol increases by 1 unit, log-odds increase by **0.493**.
- **Active Lifestyle ($\beta = -0.2154$)** → If a person is more active, log-odds decrease by **0.2154**.

---

### **3. Converting Log-Odds to an Interpretable Scale (Odds Ratio)**
Since log-odds are **not intuitive**, we exponentiate them using **$e^\beta$** to convert them into **odds ratios**:

$$
\text{Odds Ratio} = e^{\beta}
$$

- This transformation converts the log-odds into a **multiplicative effect on the odds**.

#### **Example Interpretation**
| Feature     | Coeff ($\beta$) | Log-Odds Change | Odds Ratio ($e^\beta$) | Interpretation                                                               |
| ----------- | --------------- | --------------- | ---------------------- | ---------------------------------------------------------------------------- |
| Cholesterol | **0.493**       | +0.493          | **1.64**               | 1 unit increase in cholesterol **increases the odds** of disease by **64%**. |
| Active      | **-0.2154**     | -0.2154         | **0.81**               | 1 unit increase in activity **decreases the odds** of disease by **19%**.    |
| Smoking     | **-0.1303**     | -0.1303         | **0.87**               | Smokers are **13% less likely** to develop the disease.                      |

> **Odds Ratio > 1** → Feature **increases** the likelihood of the event.  
> **Odds Ratio < 1** → Feature **decreases** the likelihood of the event.

---

### **4. Why Do We Use $e^\beta$?**
- **Log-odds are linear but difficult to interpret**.
- **Exponentiation converts log-odds into a probability-based scale**.
- **Odds ratios make it easier to compare different features**.

---

### **5. Summary**
✅ **Logit Function** → Computes **log-odds**.  
✅ **Regression Coefficients (`β`)** → Directly influence **log-odds**.  
✅ **Exponentiation ($e^\beta$)** → Converts log-odds into **odds ratios** for better interpretability.  
✅ **Odds Ratio >1** → **Increases risk** (e.g., higher cholesterol → more disease risk).  
✅ **Odds Ratio <1** → **Decreases risk** (e.g., more physical activity → less disease risk).  