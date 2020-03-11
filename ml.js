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

let v;
function testSpecies() {
  v = new Species(5, 3);
  v.mutateAddConnection();
  v.mutateAddConnection();
  v.mutateAddConnection();
  v.mutateAddConnection();
  v.mutateAddConnection();
  v.mutateAddNode();
  v.mutateAddNode();
  v.mutateAddNode();
  v.mutateAddNode();
  return v;
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
    this.numConnections = 0; //aka innovation number
    this.connections = [];
    this.maxDepth = 1;
  }
  mutate() {
    //mutation here
  }
  adjustDepth(depthLevel) {
    //add a new level at depthlevel
    //Complete
    //Not Tested
    for (let i = 0; i < this.numGenes; i++) {
      if (this.genes[i].depth >= depthLevel) {
        this.genes[i].depth++;
      }
    }
    this.maxDepth = this.genes[this.numInputs].depth;
  }
  mutateAddConnection() {
    //add a connection between unconnected nodes
    //Complete
    //Not Tested
    let tries = 20;
    while (tries > 1) {
      let randomSourceNodeIndex = parseInt(random(0, this.numGenes - 1));
      while (this.genes[randomSourceNodeIndex].depth < 1) {
        randomSourceNodeIndex = parseInt(random(0, this.numGenes));
      }
      let randomNodeIndex = parseInt(random(0, this.numGenes - 1));
      let tryCount = 20;
      while (
        tryCount > 0 &&
        (this.genes[randomSourceNodeIndex].depth >=
          this.genes[randomNodeIndex].depth ||
          this.checkConnection(
            this.genes[randomSourceNodeIndex],
            this.genes[randomNodeIndex]
          ))
      ) {
        randomSourceNodeIndex = parseInt(random(0, this.numGenes));
        tryCount--;
      }
      if (
        this.genes[randomSourceNodeIndex].depth <
          this.genes[randomNodeIndex].depth &&
        !this.checkConnection(
          this.genes[randomSourceNodeIndex],
          this.genes[randomNodeIndex]
        )
      ) {
        //add new connection here
        let newConnection = new Connection(
          this.genes[randomSourceNodeIndex],
          this.genes[randomNodeIndex],
          this.numConnections
        );
        this.connections.push(newConnection);
        this.numConnections++;
        break;
      }
      tries--;
    }
  }
  checkConnection(source, node) {
    //Complete
    //Not Tested
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
    //Complete
    //Not Tested
    let randomConnectionIndex = parseInt(random(0, this.numConnections - 1));
    while (!this.connections[randomConnectionIndex].enabled) {
      randomConnectionIndex = parseInt(random(0, this.numConnections - 1));
    }
    if (
      this.connections[randomConnectionIndex].node.depth -
        this.connections[randomConnectionIndex].source.depth ==
      1
    ) {
      this.adjustDepth(this.connections[randomConnectionIndex].node.depth);
      //adjust depth
    }
    let depth = parseInt(
      (this.connections[randomConnectionIndex].node.depth +
        this.connections[randomConnectionIndex].source.depth) /
        2
    );
    this.connections[randomConnectionIndex].enabled = false;
    let newGene = new Node(this.numGenes++, depth, "hidden");
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
