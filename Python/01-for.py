from cs1robots import *
create_world()

hubo = Robot(beepers=1)

def turn_right() :
    for i in range (3):
        hubo.turn_left()
        
def move_upstairs() :
    hubo.turn_left()
    hubo.move()
    turn_right()
    for i in range(2):
        hubo.move()

def move_downstairs() :
    for i in range(2) :
        hubo.move()
    hubo.turn_left()
    hubo.move()
    turn_right()

def move_around() :
    for i in range(2) :
        hubo.turn_left()


        



