Say the data has the following form: $f(x) = g(w_0x_0+w_1x_1 + b)$
So the model is represented as: $$f_{\mathbf{w},b}(\mathbf{x}^{(i)}) = g(\mathbf{w} \cdot \mathbf{x}^{(i)} + b) \tag{1}$$
and the sigmoid function is: $$g(z) = \frac{1}{1+e^{-z}}$$
and $\mathbf{w} \cdot \mathbf{x}$ is the vector dot product: $$\mathbf{w} \cdot \mathbf{x} = w_0 x_0 + w_1 x_1$$
* We interpret the output of the model ($f_{\mathbf{w},b}(x)$) as the probability that $y=1$ given $\mathbf{x}$ and parameterized by $\mathbf{w}$ and $b$.
* Therefore, to get a final prediction ($y=0$ or $y=1$) from the logistic regression model, we can use the following heuristic -
  
  if, $f_{\mathbf{w},b}(x) >= 0.5$, predict $y=1$
  if, $f_{\mathbf{w},b}(x) < 0.5$, predict $y=0$

[[Decision Boundary]]
[[Logistic Regression Cost Function]]
