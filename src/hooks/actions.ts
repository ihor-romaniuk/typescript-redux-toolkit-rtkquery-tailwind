import { useDispatch } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import { githubAction } from '../store/github/github.slice';

const action = {
  ...githubAction,
};

export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(action, dispatch);
}
