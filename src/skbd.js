const values = [1, 2, 5, 10, 20, 50, 100, 200];
var currentv = 0;

function pixredirect(n) {
  if (n == 0) {
    alert("como?");
  } else if (values.includes(n)) {
    currentv = n;
    updateTitle();
  }
}

function updateTitle() {
    const title = "R$" + currentv;
    let val = currentv
    window.location.href = `pix.html?title=${title}&val=${val}`;
}
