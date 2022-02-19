/*
 Usage
 new El("div").append(main).appendChild(new El)
*/

class El {
  constructor(type, classList = [], config = {}) {
    this.classList = classList.toString().split(",").join(" ");
    this.node = document.createElement(type);
    if (!this.node) {
      console.log("[-] - not existing node!!!");
    }
    if (type === "img") {
      this.node.src = config.src ? config.src : "#";
    }
    if (type === "label") {
      this.node.for = config.for ? config.for : "";
    }
    if (config.textNode) {
      this.node.innerHTML = config.textNode ? config.textNode : "";
    }
    if (type === "input") {
      this.node.type = config.type ? config.type : "text";
    }
    if (config.value) {
      this.node.value = config.value ? config.value : "";
    }
    if (type === "textarea") {
      this.node.col = config.col ? config.col : 10;
      this.node.row = config.row ? config.row : 10;
      this.node.innerHTML = config.textNode ? config.textNode : "";
    }

    this.node.className = this.classList;
    this.node.id = Date.now();
    return this;
  }
  get() {
    return this.node;
  }

  append(parentNodeId) {
    if (typeof parentNodeId === "string") {
      setTimeout(200, this.slowRender);
      document.getElementById(parentNodeId).appendChild(this.node);
      return this;
    } else {
      setTimeout(200, this.slowRender);
      parentNodeId.appendChild(this.node);
      return this;
    }
  }

  slowRender() {
    return 2 + 3;
  }

  appendChild(childElement) {
    if (document.getElementById(this.node.id)) {
      document.getElementById(this.node.id).appendChild(childElement.get());
    } else {
      this.node.appendChild(childElement.get());
    }
    return this;
  }
}
