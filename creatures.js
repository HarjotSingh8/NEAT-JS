class Life {
  constructor() {
    /*
     * this.strength
     * this.maxHealth
     * this.currentHealth
     * this.maxFood
     * this.currentFood
     * this.speed
     * this.runSpeed
     * this.perception
     * this.endurance
     * this.swimmable
     * this.maxStamina
     * this.currentStamina
     * this.maxWater
     * this.currentWater
     * this.foodType
     * this.gender
     * this.score
     * this.seaCreature
     */
  }
  movement() {
    //movement handled here
  }
  checkWater() {
    //checking if it'll stay alive in (or in cases of fishes outside) water
  }
  checkLife() {
    //kill if Food, Water, Health is finished
  }
  copy() {
    //copy the organism
  }
  updateBox() {
    //update current location (which box is the organism in)
  }
}

class Human extends Life {
  constructor() {
    this.type = "Human";
    this.score = 0;
    this.perception = 10;
    this.strength = random(50, 100);
    this.maxHealth = random(75, 100);
    if (random() > 0.5) {
      this.gender = male;
    } else {
      this.gender = female;
    }
    this.maxFood = random(75, 100);
    this.maxWater = random(75, 100);
    this.maxStamina = random(75, 100);
    if (random() > 0.25) {
      this.swimmable = true;
    } else {
      this.swimmable = false;
    }
    this.speed = random(5, 10);
    this.runSpeed = random(25, 35);
    this.foodType = ["Vegetation", "Herbivores", "fishSmall"];
    this.seaCreature = false;
  }
}

class Zombie extends Life {
  constructor() {
    this.type = "Zombie";
    this.score = 0;
    this.perception = 5;
    this.strength = random(50, 100);
    this.maxHealth = random(75, 100);
    if (random() > 0.5) {
      this.gender = male;
    } else {
      this.gender = female;
    }
    this.maxFood = random(75, 100);
    this.maxWater = random(75, 100);
    this.maxStamina = random(75, 100);
    if (random() > 0.25) {
      this.swimmable = true;
    } else {
      this.swimmable = false;
    }
    this.speed = random(5, 10);
    this.runSpeed = random(25, 35);
    this.foodType = ["Human", "Carnivores", "Herbivores"];
    this.seaCreature = false;
  }
}

class Deer extends Life {
  constructor() {
    this.type = "Herbivores";
    this.score = 0;
    this.perception = 7;
    this.strength = random(50, 100);
    this.maxHealth = random(75, 100);
    if (random() > 0.5) {
      this.gender = male;
    } else {
      this.gender = female;
    }
    this.maxFood = random(75, 100);
    this.maxWater = random(75, 100);
    this.maxStamina = random(75, 100);
    if (random() > 0.25) {
      this.swimmable = true;
    } else {
      this.swimmable = false;
    }
    this.speed = random(5, 10);
    this.runSpeed = random(40, 60);
    this.foodType = ["Vegetation"];
    this.seaCreature = false;
  }
}

class FishSmall extends Life {
  constructor() {
    this.type = "fishSmall";
    this.score = 0;
    this.perception = 7;
    this.strength = random(50, 100);
    this.maxHealth = random(75, 100);
    if (random() > 0.5) {
      this.gender = male;
    } else {
      this.gender = female;
    }
    this.maxFood = random(75, 100);
    this.maxWater = random(75, 100);
    this.maxStamina = random(75, 100);
    if (random() > 0.25) {
      this.swimmable = true;
    } else {
      this.swimmable = false;
    }
    this.speed = random(5, 10);
    this.runSpeed = random(40, 60);
    this.foodType = ["Vegetation"];
    this.seaCreature = true;
  }
}
