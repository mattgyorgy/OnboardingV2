<script lang="ts">
  import { onboardingStore } from '$lib/stores/onboarding';
  import { questions } from '$lib/data/questions';
  import ProgressBar from '$lib/components/ProgressBar.svelte';
  import QuestionCard from '$lib/components/QuestionCard.svelte';
  import CompletionScreen from '$lib/components/CompletionScreen.svelte';

  $: currentQuestion = questions[$onboardingStore.currentStep];
</script>

<div class="min-h-[100dvh] bg-black flex items-center justify-center p-4 md:p-6">
  <div class="w-full max-w-xl mx-auto">
    <div class="space-y-8 animate-fadeIn">
      {#if $onboardingStore.currentStep > 0 && !$onboardingStore.isComplete}
        <ProgressBar 
          current={$onboardingStore.currentStep} 
          total={questions.length - 1} 
        />
      {/if}
      
      {#if $onboardingStore.isComplete}
        <CompletionScreen />
      {:else if currentQuestion}
        <QuestionCard 
          question={currentQuestion}
          currentAnswer={$onboardingStore.answers[currentQuestion.id]}
          isFirstQuestion={$onboardingStore.currentStep === 0}
          on:next={() => onboardingStore.nextStep()}
          on:prev={() => onboardingStore.prevStep()}
          on:setAnswer={(e) => onboardingStore.setAnswer(e.detail.questionId, e.detail.answer)}
        />
      {/if}
    </div>
  </div>
</div>

<style>
  :global(html) {
    font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  :global(.animate-fadeIn) {
    animation: fadeIn 0.3s ease-out forwards;
  }
</style>