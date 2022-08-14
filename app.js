document.body.onload = addElement;
function addElement() {
  function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
  }

  let segments = 400;
  let threshold = segments / 3;

  document.body.style = `--segments: ${segments}`;

  for (i = 1; i < segments; i++) {
    let newElement = document.createElement('div');
    newElement.setAttribute('class', 'segment');
    newElement.setAttribute('id', `segment${i}`);

    newElement.style = `--i: ${i}`;
    let power = i ^ 0.3;
    newElement.style = `--i: ${i}; --a: ${power / 500}`;

    let ref = document.getElementById(`segment${i - 1}`);
    insertAfter(ref, newElement);

    let newElement2 = document.createElement('div');
    newElement2.setAttribute('class', 'segment2');
    newElement2.setAttribute('id', `segment_${i}`);
    newElement2.style = `--i: ${i}`;
    newElement2.style = `--i: ${i}; --a: ${power / 500}`;
    let ref2 = document.getElementById(`segment_${i - 1}`);
    insertAfter(ref2, newElement2);
  }
}
