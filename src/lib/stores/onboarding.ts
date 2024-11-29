import { writable } from 'svelte/store';
import type { Question } from '$lib/types';

type OnboardingState = {
  currentStep: number;
  answers: Record<string, any>;
  isComplete: boolean;
};

const initialState: OnboardingState = {
  currentStep: 0,
  answers: {},
  isComplete: false,
};

function createOnboardingStore() {
  const { subscribe, set, update } = writable<OnboardingState>(initialState);

  return {
    subscribe,
    nextStep: () => update(state => {
      const nextStep = state.currentStep + 1;
      return {
        ...state,
        currentStep: nextStep,
        isComplete: nextStep >= 9 // Total number of questions
      };
    }),
    prevStep: () => update(state => ({
      ...state,
      currentStep: Math.max(0, state.currentStep - 1),
      isComplete: false
    })),
    setAnswer: (questionId: string, answer: any) => update(state => ({
      ...state,
      answers: {
        ...state.answers,
        [questionId]: answer
      }
    })),
    reset: () => set(initialState)
  };
}

export const onboardingStore = createOnboardingStore();