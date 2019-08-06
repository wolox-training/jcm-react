// Immutable method that increment an object's value in an Array
const increaseCollectionProp = (collection, targetId, property, increment) => {
  const clonedCollection = collection.slice();
  const targetIndex = clonedCollection.findIndex(el => el.id === targetId);

  clonedCollection[targetIndex][property] += increment;
  return clonedCollection;
};

export default increaseCollectionProp;
