---
layout: default
title: "Assignment 1: Projectile Motion"
---

Design due: **Thursday, Aug 31st** at the beginning of class

Program due: **Tuesday, Sept 5th by 11:59 PM**

Getting Started
===============

Start by downloading [CS101\_Assign01.zip](CS101_Assign01.zip), saving it in the directory **H:\\CS101**.

Start a **Cygwin Terminal** and run the following commands:

    cd h:
    cd CS101
    unzip CS101_Assign01.zip
    cd CS101_Assign01

Using **Notepad++**, open the file

> **H:\\CS101\\CS101\_Assign01\\Projectile.cpp**

Your Tasks
==========

## Design

Based on the requirements described below in the "Program" section, fill out a [design template](../design-template.pdf).  Consider what the input and output of the program are, and what steps are necessary to compute the output from the input.

The design is due at the beginning of class on **Thursday, August 31st**.

## Program

Your task is to write a program that prompts the user to enter the launch angle (in degrees) and initial velocity (in m/s) of an object. The program should then print out the object's total time in the air, the maximum height the object reached, and the horizontal distance the object covered.

Here is an example run of the program (user input in **bold**):

<pre>
Enter the launch angle in degrees: <b>50</b>
Enter the initial velocity in m/s: <b>25.6</b>
The object took 3.19 seconds to fall.
The velocity of the object at impact was:   31.3 m/sec
                                           102.7 ft/sec
                                            70.1 mph
</pre>

The time field should have two decimal places of precision. All of the distance values should allow for up to four digits *in front* of the decimal point and one digit *after* the decimal point such that the decimal points are aligned in the final output.

When you are ready to compile the program, in the Cygwin bash shell (or Linux terminal) window type the command

    make

To run the program, type the command

    ./Projectile.exe

Hints
=====

Physics
-------

The basic physics governing an object falling only under the influence of gravity (neglecting air resistance) is integration of the acceleration (which for the earth is -9.81 m/s<sup>2</sup>) with respect to time. Hence the velocity of the object as a function of time is given by

> ![image](images/assign01/vx.png)

where *v(t)* is the velocity at time *t*, *a* is the acceleration due to gravity (-9.81 m/s<sup>2</sup>), and *v*<sub>0</sub> is the initial velocity (which for this assignment is 0).

The position of the object as a function of time is found by integrating the velocity with respect to time as follows

> ![image](images/assign01/poseq.png)

where *x(t)* is the position at time *t* and *x*<sub>0</sub> is the initial position (which for this assignment is the value entered by the user).

Therefore we can find the *time* the object falls in seconds by solving the above equation for *t* setting *x(t)* = 0, *a* = -9.81, *v*<sub>0</sub> = 0

> ![image](images/assign01/timeeq.png)

where *x*<sub>0</sub> is given in meters. Once the time is computed, the velocity at impact is computed from the velocity equation as (again setting *v*<sub>0</sub> and *a* = -9.81)

> ![image](images/assign01/finalveleq.png)

Note the velocity will be negative indicating the object is moving downward, but your output should only show the positive magnitude.

Some useful conversions

> -   3.28 feet in a meter
> -   3600 seconds in an hour
> -   1609 meters in a mile

**USE** the computer to compute the conversion factors for the velocity units by simply writing expressions in your program and storing the results in variables.

Programming
-----------

**START EARLY! And develop the program incrementally!** You should always have a working program at each step (even if only minimally) to make it easier to debug errors. For example, make sure the program obtains the user input properly and then add one computation at a time. Also make sure you follow good programming practices such as **adding comments**, **using meaningful variable names**, and **having proper indentation in the program**.

The square root function in C is

    sqrt(x)

which returns a **double** value which is the square root of *x*. You will need to include the **math.h** library by adding the following line at the top of your program

    #include <math.h>

See pages 346&ndash;353 of the textbook for details regarding the conversion specifiers for **printf**.

Grading
=======

Your grade will be determined as follows:

* Design artifact: 15
* Proper variable datatypes: 5
* Input initial height: 25
* Determine time: 15
* Determine velocity m/s: 10
* Determine velocity ft/s: 10
* Determine velocity mph: 10
* Proper output format: 10

Submitting
==========

Your design will be collected in class on the day that designs are due.

To submit your program, make sure your **Freefall.cpp** file is saved, and in the Cygwin window type the command

    make submit

Enter your Marmoset username and password (which you should have received by email.) Note that your password will not be echoed to the screen. Make sure that after you enter your username and password, you see a message indicating that the submission was successful.

If the **make submit** command does not work, you can [submit using the web interface](../submitting.html) (see the link for details).

Make sure that you check the file(s) you submitted to ensure that they are correct.  See the instructions for [Verifying your submission](../submitting.html#verifying-your-submission).

<div class="callout">
<b>Important</b>: It is your responsibility to verify that you submitted the correct files.  You may receive a grade of 0 for incorrectly submitted work.
</div>

<!-- vim:set wrap: -->
<!-- vim:set linebreak: -->
<!-- vim:set nolist: -->
