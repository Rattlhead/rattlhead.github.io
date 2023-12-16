---
layout: post
theme: python
index: 7.1
title: Управляем черепашкой WASD
---


В этой программе мы создаем окно и черепаху, определяем функции для движения вперед, назад и поворота влево и вправо, а
затем привязываем эти функции к клавишам со стрелками. Когда вы запустите эту программу, вы сможете управлять черепахой
с помощью клавиш со стрелками.

Методы penup() и pendown() в модуле turtle позволяют поднимать и опускать перо. Мы можем использовать пробел для
переключения между поднятием и опусканием пера. Для этого нам понадобится дополнительная функция, которая будет
проверять текущее состояние пера и делать противоположное действие.

Для изменения ширины линии, которую рисует черепаха, можно использовать метод pensize(). Добавим функции для изменения
ширины линии по нажатию клавиш '+' и '-':

Для изменения цвета черепахи и цвета линии, которую она рисует, можно использовать метод color(). Давайте добавим в нашу
программу возможность изменения цвета линии по нажатию клавиш 'r', 'g', и 'b' для цветов красный, зеленый и синий
соответственно

Возможно, вам будет интересно добавить возможность рисования фигур определенного размера и формы. Например, добавим
функции, которые рисуют квадрат, круг и треугольник по нажатию клавиш 's', 'c' и 't' соответственно
<pre><code data-language="python">
import turtle

win = turtle.Screen()  # Создаем окно для черепахи
t = turtle.Turtle()  # Создаем объект черепахи

# Определяем функции для управления черепахой
def move_forward():
    t.forward(100)

def move_backward():
    t.backward(100)

def turn_left():
    t.left(90)

def turn_right():
    t.right(90)

def change_color_red():
    t.color("red")

def change_color_green():
    t.color("green")

def change_color_blue():
    t.color("blue")

def increase_pensize():
    pensize = t.pensize()
    t.pensize(pensize + 1)

def decrease_pensize():
    pensize = t.pensize()
    if pensize > 1:
        t.pensize(pensize - 1)

def toggle_pen():
    if t.isdown():
        t.penup()
    else:
        t.pendown()

def draw_square():
    for _ in range(4):
        t.forward(100)
        t.right(90)

def draw_circle():
    t.circle(50)

def draw_triangle():
    for _ in range(3):
        t.forward(100)
        t.right(120)

# Привязываем функции к клавишам
win.onkey(move_forward, "Up")
win.onkey(move_backward, "Down")
win.onkey(turn_left, "Left")
win.onkey(turn_right, "Right")
win.onkey(change_color_red, "r")
win.onkey(change_color_green, "g")
win.onkey(change_color_blue, "b")
win.onkey(increase_pensize, "+")
win.onkey(decrease_pensize, "-")
win.onkey(toggle_pen, "space")
win.onkey(draw_square, "s")
win.onkey(draw_circle, "c")
win.onkey(draw_triangle, "t")

win.listen()  # Заставляем окно прослушивать нажатия клавиш
turtle.mainloop()  # Запускаем главный цикл для окна черепахи
</code></pre>
