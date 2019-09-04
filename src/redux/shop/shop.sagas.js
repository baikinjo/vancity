import { all, takeEvery, call, put } from 'redux-saga/effects'

import {
  firestore,
  convertCollectionsSnapshotToMap
} from '../../firebase/firebase'

import { fetchCollectionsSuccess, fetchCollectionsError } from './shop.actions'

import { ShopActionTypes } from './shop.types'

export function* fetchCollectionsAsync() {
  yield console.log('fired')

  try {
    const collectionRef = firestore.collection('collections')
    const snapshot = yield collectionRef.get()
    const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot)
    yield put(fetchCollectionsSuccess(collectionsMap))
  } catch (error) {
    yield put(fetchCollectionsError(error.message))
  }
}

export function* fetchCollectionsStart() {
  yield takeEvery(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  )
}

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)])
}
