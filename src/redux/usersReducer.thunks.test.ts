import {follow, unfollow} from './usersReducer';
import {usersAPI} from '../api/users-api';
import {APIResponseType, ResultCodesEnum} from '../api/api';

jest.mock('../api/users-api')
const userAPIMock = usersAPI as jest.Mocked<typeof usersAPI>;

const dispatchMock = jest.fn();
const getStateMock = jest.fn();

beforeEach(() => {
  dispatchMock.mockClear();
  getStateMock.mockClear();
  userAPIMock.follow.mockClear();
  userAPIMock.unfollow.mockClear();
})



const result: APIResponseType = {
  resultCode: ResultCodesEnum.Success,
  messages: [],
  data: {}
}

userAPIMock.follow.mockReturnValue(Promise.resolve(result))
userAPIMock.unfollow.mockReturnValue(Promise.resolve(result))

test('thunk follow success', async () => {
  const thunk = follow(1)

  await thunk(dispatchMock, getStateMock, {})
  expect(dispatchMock).toBeCalledTimes(4)
  // expect(dispatchMock).toHaveBeenCalledWith(1, actions.toggleFollowingProgress(true, 1))
  // expect(dispatchMock).toHaveBeenCalledWith(2, actions.followSuccess(1))
  // expect(dispatchMock).toHaveBeenCalledWith(3, actionsProfile.setSubscribed(isSubscribed))
  // expect(dispatchMock).toHaveBeenCalledWith(4, actions.toggleFollowingProgress(false, 1))
})
test('thunk unfollow success', async () => {
  const thunk = unfollow(1)

  await thunk(dispatchMock, getStateMock, {})
  expect(dispatchMock).toBeCalledTimes(4)
  // expect(dispatchMock).toHaveBeenCalledWith(1, actions.toggleFollowingProgress(true, 1))
  // expect(dispatchMock).toHaveBeenCalledWith(2, actions.followSuccess(1))
  // expect(dispatchMock).toHaveBeenCalledWith(3, actionsProfile.setSubscribed(isSubscribed))
  // expect(dispatchMock).toHaveBeenCalledWith(4, actions.toggleFollowingProgress(false, 1))
})
