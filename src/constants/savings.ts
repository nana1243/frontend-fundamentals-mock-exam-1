const USER_INPUT_CONFIG = [
  { id: 'targetAmount', label: '목표 금액', placeholder: '목표 금액을 입력하세요', suffix: '원', type: 'input' },
  { id: 'monthlyAmount', label: '월 납입액', placeholder: '희망 월 납입액을 입력하세요', suffix: '원', type: 'input' },
  {
    id: 'period',
    label: '저축 기간',
    title: '저축 기간을 선택해주세요',
    placeholder: '저축 기간을 선택해주세요',
    type: 'select',
    selectOptions: [
      { value: 6, label: '6개월' },
      { value: 12, label: '12개월' },
      { value: 24, label: '24개월' },
    ],
  },
] as const;

export { USER_INPUT_CONFIG };
