import { curry, equals } from "ramda";

const byId = {
  '1-0': {
    trackId: 1,
    frameNum: 0,
    maskSource: 'preGen',
    maskType: 'boundingBox',
    geometry: {
      top: 0,
      left: 0,
      width: 100,
      height: 100
    }
  },
  '1-1': {
    trackId: 1,
    frameNum: 1,
    maskSource: 'preGen',
    maskType: 'boundingBox',
    geometry: {
      top: 0,
      left: 0,
      width: 100,
      height: 100
    }
  },
  '1-2': {
    trackId: 1,
    frameNum: 2,
    maskSource: 'preGen',
    maskType: 'boundingBox',
    geometry: {
      top: 0,
      left: 0,
      width: 100,
      height: 100
    }
  },
  '1-3': {
    trackId: 1,
    frameNum: 3,
    maskSource: 'preGen',
    maskType: 'boundingBox',
    geometry: {
      top: 0,
      left: 0,
      width: 100,
      height: 100
    }
  },
  '1-4': {
    trackId: 1,
    frameNum: 4,
    maskSource: 'preGen',
    maskType: 'boundingBox',
    geometry: {
      top: 0,
      left: 0,
      width: 100,
      height: 100
    }
  },
  '1-5': {
    trackId: 1,
    frameNum: 5,
    maskSource: 'preGen',
    maskType: 'boundingBox',
    geometry: {
      top: 0,
      left: 0,
      width: 100,
      height: 100
    }
  },
  '1-6': {
    trackId: 1,
    frameNum: 6,
    maskSource: 'preGen',
    maskType: 'boundingBox',
    geometry: {
      top: 0,
      left: 0,
      width: 100,
      height: 100
    }
  },
  '1-7': {
    trackId: 1,
    frameNum: 7,
    maskSource: 'preGen',
    maskType: 'boundingBox',
    geometry: {
      top: 0,
      left: 0,
      width: 100,
      height: 100
    }
  },
  '1-8': {
    trackId: 1,
    frameNum: 8,
    maskSource: 'preGen',
    maskType: 'boundingBox',
    geometry: {
      top: 0,
      left: 0,
      width: 100,
      height: 100
    }
  },
  '1-9': {
    trackId: 1,
    frameNum: 9,
    maskSource: 'preGen',
    maskType: 'boundingBox',
    geometry: {
      top: 0,
      left: 0,
      width: 100,
      height: 100
    }
  },
  '1-10': {
    trackId: 1,
    frameNum: 10,
    maskSource: 'preGen',
    maskType: 'boundingBox',
    geometry: {
      top: 0,
      left: 0,
      width: 100,
      height: 100
    }
  },
  '1-11': {
    trackId: 1,
    frameNum: 11,
    maskSource: 'preGen',
    maskType: 'boundingBox',
    geometry: {
      top: 0,
      left: 0,
      width: 100,
      height: 100
    }
  },
  '1-12': {
    trackId: 1,
    frameNum: 12,
    maskSource: 'preGen',
    maskType: 'boundingBox',
    geometry: {
      top: 0,
      left: 0,
      width: 100,
      height: 100
    }
  },
  '1-13': {
    trackId: 1,
    frameNum: 13,
    maskSource: 'preGen',
    maskType: 'boundingBox',
    geometry: {
      top: 0,
      left: 0,
      width: 100,
      height: 100
    }
  },
  '1-14': {
    trackId: 1,
    frameNum: 14,
    maskSource: 'preGen',
    maskType: 'boundingBox',
    geometry: {
      top: 0,
      left: 0,
      width: 100,
      height: 100
    }
  },
  '1-15': {
    trackId: 1,
    frameNum: 15,
    maskSource: 'preGen',
    maskType: 'boundingBox',
    geometry: {
      top: 0,
      left: 0,
      width: 100,
      height: 100
    }
  },
  '1-16': {
    trackId: 1,
    frameNum: 16,
    maskSource: 'preGen',
    maskType: 'boundingBox',
    geometry: {
      top: 0,
      left: 0,
      width: 100,
      height: 100
    }
  },
  '1-17': {
    trackId: 1,
    frameNum: 17,
    maskSource: 'preGen',
    maskType: 'boundingBox',
    geometry: {
      top: 0,
      left: 0,
      width: 100,
      height: 100
    }
  },
  '1-18': {
    trackId: 1,
    frameNum: 18,
    maskSource: 'preGen',
    maskType: 'boundingBox',
    geometry: {
      top: 0,
      left: 0,
      width: 100,
      height: 100
    }
  },
  '1-19': {
    trackId: 1,
    frameNum: 19,
    maskSource: 'preGen',
    maskType: 'boundingBox',
    geometry: {
      top: 0,
      left: 0,
      width: 100,
      height: 100
    }
  },
  '1-20': {
    trackId: 1,
    frameNum: 20,
    maskSource: 'preGen',
    maskType: 'boundingBox',
    geometry: {
      top: 1,
      left: 0,
      width: 100,
      height: 100
    }
  },
  '1-21': {
    trackId: 1,
    frameNum: 21,
    maskSource: 'preGen',
    maskType: 'boundingBox',
    geometry: {
      top: 0,
      left: 0,
      width: 100,
      height: 100
    }
  },
  '1-22': {
    trackId: 1,
    frameNum: 22,
    maskSource: 'preGen',
    maskType: 'boundingBox',
    geometry: {
      top: 0,
      left: 0,
      width: 100,
      height: 100
    }
  },
  '1-23': {
    trackId: 1,
    frameNum: 23,
    maskSource: 'preGen',
    maskType: 'boundingBox',
    geometry: {
      top: 0,
      left: 0,
      width: 100,
      height: 100
    }
  },
  '1-24': {
    trackId: 1,
    frameNum: 24,
    maskSource: 'preGen',
    maskType: 'boundingBox',
    geometry: {
      top: 0,
      left: 0,
      width: 100,
      height: 100
    }
  },
  '1-25': {
    trackId: 1,
    frameNum: 25,
    maskSource: 'preGen',
    maskType: 'boundingBox',
    geometry: {
      top: 0,
      left: 0,
      width: 100,
      height: 100
    }
  },
  '1-26': {
    trackId: 1,
    frameNum: 26,
    maskSource: 'preGen',
    maskType: 'boundingBox',
    geometry: {
      top: 0,
      left: 0,
      width: 100,
      height: 100
    }
  },
  '1-27': {
    trackId: 1,
    frameNum: 27,
    maskSource: 'preGen',
    maskType: 'boundingBox',
    geometry: {
      top: 0,
      left: 0,
      width: 100,
      height: 100
    }
  },
  '1-28': {
    trackId: 1,
    frameNum: 28,
    maskSource: 'preGen',
    maskType: 'boundingBox',
    geometry: {
      top: 0,
      left: 0,
      width: 100,
      height: 100
    }
  },
  '1-29': {
    trackId: 1,
    frameNum: 29,
    maskSource: 'preGen',
    maskType: 'boundingBox',
    geometry: {
      top: 0,
      left: 0,
      width: 100,
      height: 100
    }
  },
  '1-30': {
    trackId: 1,
    frameNum: 30,
    maskSource: 'preGen',
    maskType: 'boundingBox',
    geometry: {
      top: 0,
      left: 0,
      width: 100,
      height: 100
    }
  },
};

const originalElement = {
  trackId: 1,
  maskSource: 'preGen',
  frameNum: 10,
  maskType: 'boundingBox',
  geometry: {
    top: 0,
    left: 0,
    width: 100,
    height: 100
  }
};

const seed = {
  trackId: 1,
  maskSource: 'preGen',
  frameNum: 15,
  maskType: 'boundingBox',
  geometry: {
    top: 0,
    left: 0,
    width: 120,
    height: 120
  }
};

const list = [
  {
    trackId: 1,
    maskSource: 'preGen',
    frameNum: 11,
    maskType: 'boundingBox',
    geometry: {
      top: 0,
      left: 0,
      width: 121,
      height: 120
    }
  },
  {
    trackId: 1,
    maskSource: 'preGen',
    frameNum: 12,
    maskType: 'boundingBox',
    geometry: {
      top: 0,
      left: 0,
      width: 122,
      height: 120
    }
  },
  {
    trackId: 1,
    maskSource: 'preGen',
    frameNum: 13,
    maskType: 'boundingBox',
    geometry: {
      top: 0,
      left: 0,
      width: 123,
      height: 120
    }
  },
  {
    trackId: 1,
    maskSource: 'preGen',
    frameNum: 14,
    maskType: 'boundingBox',
    geometry: {
      top: 0,
      left: 0,
      width: 123,
      height: 120
    }
  }
]
export const formMaskId = curry((trackId, frameNum) => `${trackId}-${frameNum}`);

const isSameGeometry = (value, assertion) => {
  return equals(value, assertion)
};

export const getMaskId = (mask) => formMaskId(mask.trackId, mask.frameNum)

// const produceChange = (state, originalMaskId, seedMask) => {
//   const currentFrame = seedMask.frameNum;
//   const trackId = seedMask.trackId;
//   const originalGeometry = state[originalMaskId].geometry
//   const propagateGeometry = seedMask.geometry
//   let nextFrameIndex = 1
// let changedMask = []
// while (true) {
//   const mask = state[formMaskId(trackId, currentFrame + nextFrameIndex)];
//   if (mask && isSameGeometry(mask.geometry, originalGeometry)) {
//     changedMask.push({ ...mask });
//     nextFrameIndex++
//   } else {
//     break;
//   }
// }
// return changedMask
// };

// console.log(produceChange(byId, '1-10', seed))

const reduceById = (getId, list) => {
  return list.reduce((acc, elem) => ({ ...acc, [getId(elem)]: elem }), {})
}

console.log('reduceById(getMaskId, list)', reduceById(getMaskId, list))