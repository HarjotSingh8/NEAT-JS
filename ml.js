class Node {
  constructor(id, type) {
    this.id = id;
    this.type = type;
    this.value = 0;
  }
}

class Connection {
  constructor(source, destination, innovationNumber) {
    this.innovationNumber = innovationNumber;
    this.source = source;
    this.destination = destination;
    this.weight = random();
    this.bias = random();
    this.enabled = true;
  }
  activation() {
    return tan(source.value);
  }
  mutate() {
    //change weights and biases
  }
  copy() {
    //copy this connection
  }
}

class Species {
  constructor(numInputs, numOutputs) {
    this.numInputs = numInputs;
    this.inputs = [];
    for (let i = 0; i < this.numInputs; i++) {
      this.inputs.push(new Node("input"));
    }
    this.numOutputs = numOutputs;
    this.outputs = [];
    for (let i = 0; i < this.numOutputs; i++) {
      this.outputs.push(new Node("output"));
    }
    this.genes = [];
    for (let i = 0; i < this.numInputs; i++) {
      this.genes.push(this.inputs[i]);
    }
    for (let i = 0; i < this.numOutputs; i++) {
      this.genes.push(this.outputs[i]);
    }
    this.numInnovations = 0;
    this.connections = [];
  }
  mutate() {
    //mutation here
  }
  newConnection() {
    //new connection here
    this.numInnovations++;
    this.connections.push();
  }
}

class Organism {
  constructor(species) {
    this.species = species;
    this.mutationTrees = [];
    initOrganism();
  }
  initOrganism() {
    //initialise organism here
  }
}

class ML {
  constructor(species) {}
}

function activationFunctionSigmoid(d) {
  //sigmoid function -> Output is between 0 & 1
  d = Math.pow(Math.E, -d);
  d++;
  d = 1 / d;
  return d;
}

function activationFunctionTan(d) {
  return Math.tanh(d);
}
