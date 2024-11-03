import { describe, expect, test } from 'vitest'
import { mount } from '@vue/test-utils'
import WordleBoard from '../WordleBoard.vue'

describe('WordleBoard', () => {
  test('a victory message appears when user makes a guess that matches the word of the day', async () => {
    // arrange
    const wrapper = mount(WordleBoard, { props: { wordOfTheDay: 'TESTS' } })

    // act
    const guessInput = wrapper.find('input[type=text]')
    await guessInput.setValue('TESTS')
    await guessInput.trigger('keydown.enter')

    // Assert
    expect(wrapper.text()).toContain('You won!')
  })
})
