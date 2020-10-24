self.onmessage = event => self.postMessage(`worker manipulated the message: ${event.data}`);

// to finish use: self.close()
