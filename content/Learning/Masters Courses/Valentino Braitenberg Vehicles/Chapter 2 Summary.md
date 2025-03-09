Let's discuss the requirements of the vehicle in chapter 2:
1. two sensors $S_1$ and $S_2$ 
2. two motors $M_1$ and $M_2$

Possible alignment of the motors and the sensors:
	a) motor and sensor are in the same side
	b) motor and sensor are diagonally placed
	c) both the motor have the sensory input of the both the sensors

But c) is pretty much vehicle 1. Why? because, the direction of the source doesn't have any affect on it. So, it will run based on the intensity of the sensory input. (i.e. light, temperature). So, basically it is same as vehicle 1 with an extra motor and sensor.

Instead of writing `The Vehicle 2 (a) or (b)` over and over again, I will be calling `The Vehicle 2(a)`as `Tony` and `The Vehicle 2(b)` as `Billy`
But a) and b) have some interesting feature. Based on where we put the sensor they acts very differently. In
	a) Tony moves away from the source: as Tony moves away from the source the speed decreases
	b) Billy moves toward the source: as Billy moves toward the source the speed increases
			
Why does it happen? The underlying concept is related to circular motion and centripetal/centrifugal force:

> [!tip] If the two wheels are rotating at a different speeds, then it will create a turning effect. Our `Tony/Billy` will move in a arc with different radius. Because, the difference in rotation will always causes it to move toward the slower wheel

Lets try to put it into equation (The physics is not strong with this one! 🫣):
We have for proportionality constant $k$,
	$M_1 = k.S_1$ (i)
	$M_2 = k.S_2$ (ii)
and the overall velocity should be 
$$V = \frac{M1 + M2}{2} = \frac{k \cdot S1 + k \cdot S2}{2} = \frac{k}{2} \cdot (S1 + S2)$$
But the turning radius $R$ will be,
$$R = \frac{d}{2} \cdot \frac{(M_1 + M_2)}{\lvert M_2-M_1 \lvert}$$
or,
$$R = \frac{d}{2} \cdot \frac{(S_1 + S_2)}{\lvert S_2-S_1 \lvert}$$
So, in conclusion,
	a. `Tony` will always move away from the source. Until he reaches far away from the vicinity of `Source` he will be restless. Hence, he is a **COWARD**. If someone disagrees with the authors analogy, I guess if `Tony` were to scream `Oh no! Oh boy! Oh boy!`.  Seeing this one could comment,
> The only thing he chases is away!

But in case of `Billy`,
	b. `Billy` will always run toward the source. As he moves toward the `Source` his speed will increase. Hence, he is a **AGGRESSIVE**. If someone disagrees with the claim, we could put some `insulting` line in to the `Source`, like: `Oh you think you can catch me...! comeon...! comeon...!` and when he bangs on the source, one could say,
> When people said ‘face your fears,’ they didn’t mean `headfirst`!

N.B. There are people who don't hide from their fear. They march on. Cowardice is really just a refusal to confront discomfort and push limits! (I took it from _David Goggins_). You hear that Tony!

13/11/24
-Abrar 