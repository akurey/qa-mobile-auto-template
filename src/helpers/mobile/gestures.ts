const SWIPE_DIRECTION = {
  down: {
    start: { x: 50, y: 15 },
    end: { x: 50, y: 85 },
  },
  left: {
    start: { x: 95, y: 50 },
    end: { x: 5, y: 50 },
  },
  right: {
    start: { x: 5, y: 50 },
    end: { x: 95, y: 50 },
  },
  up: {
    start: { x: 50, y: 85 },
    end: { x: 50, y: 15 },
  },
};

class Gestures {
  checkIfDisplayedWithScrollDown(
    element: WebdriverIO.Element,
    maxScrolls: number,
    amount = 0,
  ) {
    if (!element.isExisting() && amount <= maxScrolls) {
      this.swipeUp(0.85);
      this.checkIfDisplayedWithScrollDown(element, maxScrolls, amount + 1);
    } else if (amount > maxScrolls) {
      throw new Error(
        `The element '${element}' could not be found or is not visible.`,
      );
    }
  }
  checkIfDisplayedWithScrollUp(
    element: WebdriverIO.Element,
    maxScrolls: number,
    amount = 0,
  ) {
    if (!element.isExisting() && amount <= maxScrolls) {
      this.swipeDown(0.85);
      this.checkIfDisplayedWithScrollDown(element, maxScrolls, amount + 1);
    } else if (amount > maxScrolls) {
      throw new Error(
        `The element '${element}' could not be found or is not visible.`,
      );
    }
  }

  swipeDown(percentage = 1) {
    this.swipeOnPercentage(
      this.calculateXY(SWIPE_DIRECTION.down.start, percentage),
      this.calculateXY(SWIPE_DIRECTION.down.end, percentage),
    );
  }

  swipeUp(percentage = 1) {
    this.swipeOnPercentage(
      this.calculateXY(SWIPE_DIRECTION.up.start, percentage),
      this.calculateXY(SWIPE_DIRECTION.up.end, percentage),
    );
  }

  swipeOnPercentage(from: Coordinates, to: Coordinates) {
    const SCREEN_SIZE = browser.getWindowRect();
    const pressOptions = this.getDeviceScreenCoordinates(SCREEN_SIZE, from);
    const moveToScreenCoordinates = this.getDeviceScreenCoordinates(
      SCREEN_SIZE,
      to,
    );
    this.swipe(pressOptions, moveToScreenCoordinates);
  }

  swipe(from: Coordinates, to: Coordinates) {
    browser.touchPerform([
      {
        action: 'press',
        options: from,
      },
      {
        action: 'wait',
        options: { ms: 1000 },
      },
      {
        action: 'moveTo',
        options: to,
      },
      {
        action: 'release',
      },
    ]);
  }

  getDeviceScreenCoordinates(screenSize: ScreenSize, coordinates: Coordinates) {
    return {
      x: Math.round(screenSize.width * (coordinates.x / 100)),
      y: Math.round(screenSize.height * (coordinates.y / 100)),
    };
  }

  calculateXY(coordinates: Coordinates, percentage: number) {
    return {
      x: coordinates.x * percentage,
      y: coordinates.y * percentage,
    };
  }
}

export default new Gestures();

type ScreenSize = {
  width: number;
  height: number;
};

type Coordinates = {
  x: number;
  y: number;
};
