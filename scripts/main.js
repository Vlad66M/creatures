class Creature{
    static number = 0;
    #id;
    constructor(name, healthPoints, damage){
        this.name = name;
        this.healthPoints = healthPoints;
        this.damage=damage;
        Creature.number++;
        this.#id = Creature.number;
    }
    get id(){
        return this.#id;
    }
    defeat(){
        console.log(this.name + ' died\n');
    }
}

class Player extends Creature{
    #lvl;
    constructor(name, healthPoints, damage){
        super(name, healthPoints, damage);
        this.#lvl = 0;
    }
    get lvl(){
        return this.#lvl;
    }
    attack(other){
        if(other instanceof Creature){
            other.healthPoints-=this.damage;
            if(other.healthPoints<=0){
                other.defeat();
                this.#lvl++;
                return true;
            }
            else{
                return false;
            }
        }
        else{
            return false;
        }
    }
}

class Enemy extends Creature{
    constructor(name, healthPoints, damage){
        super(name, healthPoints, damage);
    }
    attack(other){
        if(other instanceof Creature){
            other.healthPoints-=this.damage;
            if(other.healthPoints<=0){
                other.defeat();
                return true;
            }
            else{
                return false;
            }
        }
        else{
            return false;
        }
    }
}

var player = new Player('Player1', 100, 5);
var enemy = new Enemy('Enemy1', 20, 30);

while(true){
    if(player.healthPoints<=0 || enemy.healthPoints<=0){
        break;
    }
    else{
     player.attack(enemy);
     if(enemy.healthPoints>0){
        enemy.attack(player);
     }   
     else{
        break;
     }
    }
}