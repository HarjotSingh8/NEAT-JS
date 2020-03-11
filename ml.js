class Node {
  constructor(id, depth, type) {
    this.id = id;
    this.depth = depth;
    this.type = type;
    this.value = 0;
  }
}

class Connection {
  constructor(source, node, innovationNumber) {
    this.innovationNumber = innovationNumber;
    this.source = source;
    this.node = node;
    this.weight = random();
    this.bias = random();
    this.enabled = true;
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
      this.inputs.push(new Node(i, 0, "input"));
    }
    this.numOutputs = numOutputs;
    this.outputs = [];
    for (let i = 0; i < this.numOutputs; i++) {
      this.outputs.push(new Node(numInputs + i, 1, "output"));
    }
    this.genes = [];
    for (let i = 0; i < this.numInputs; i++) {
      this.genes.push(this.inputs[i]);
    }
    for (let i = 0; i < this.numOutputs; i++) {
      this.genes.push(this.outputs[i]);
    }
    this.numGenes = this.numInputs + this.numOutputs;
    this.numConnections = 0;
    this.connections = [];
  }
  mutate() {
    //mutation here
  }
  adjustDepth(depthLevel) {
    //add a new level at depthlevel
    for (let i = 0; i < this.numGenes; i++) {
      if (this.genes[i].depth >= depthLevel) {
        this.genes[i].depth++;
      }
    }
  }
  mutateAddConnection() {
    //add a connection between unconnected nodes

    let randomSourceNodeIndex = random(0, this.numGenes);
    while (this.genes[randomSourceNodeIndex].depth < 1) {
      randomSourceNodeIndex = random(0, this.numGenes);
    }
    let randomNodeIndex = random(0, this.numGenes);

    while (
      this.genes[randomSourceNodeIndex].depth <=
        this.genes[randomNodeIndex].depth ||
      !this.checkConnection(
        this.genes[randomSourceNodeIndex],
        this.genes[randomNodeIndex]
      )
    ) {
      randomSourceNodeIndex = random(0, this.numGenes);
      randomNodeIndex = random(0, this.numGenes);
    }
  }
  checkConnection(source, node) {
    for (let i = 0; i < this.numConnections; i++) {
      if (
        this.connections[i].source.id == source.id &&
        this.connections[i].node.id == node.id
      )
        return true;
    }
    return false;
  }
  mutateAddNode() {
    //new connection here
    let randomConnectionIndex = random(0, this.numInnovations - 1);
    while (!this.connections[randomConnectionIndex].enabled) {
      randomConnectionIndex = random(0, this.numInnovations - 1);
    }
    this.connections[randomConnectionIndex].enabled = false;
    let newGene = new Node();
    this.genes.push(newGene);
    this.connections.push(
      new Connection(
        this.connections[randomConnectionIndex].source,
        newGene,
        this.numConnections++
      )
    );
    this.connections.push(
      new Connection(
        newGene,
        this.connections[randomConnectionIndex].node,
        this.numConnections++
      )
    );
    if (
      this.connections[randomConnectionIndex].node.depth -
        this.connections[randomConnectionIndex].source.depth ==
      1
    ) {
      this.adjustDepth(this.connections[randomConnectionIndex].node.depth);
    }
    //adjust
  }
}

class Organism {
  constructor(species) {
    this.species = species;
    this.mutationTrees = [];
    this.fitness = 0;
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
