import { ref } from 'vue'

export const form = {
  billingDetails: [
    {
      name: 'name',
      placeholder: 'Alexei Ward',
      type: 'text',
      error: ref(false),
      errorMessage: 'Cannot be empty',
      label: 'Name'
    },
    {
      name: 'email',
      placeholder: 'alexei@mail.com',
      type: 'email',
      error: ref(false),
      errorMessage: 'Cannot be empty',
      label: 'Email Address'
    },
    {
      name: 'phone',
      placeholder: '+1 (202) 555-0136',
      type: 'tel',
      error: ref(false),
      errorMessage: 'Cannot be empty',
      pattern: '[0-9]{3}-[0-9]{3}-[0-9]{4}',
      label: 'Phone Number'
    }
  ],
  shippingInfo: [
    {
      name: 'address',
      placeholder: '1137 Williams Avenue',
      type: 'text',
      error: ref(false),
      errorMessage: 'Cannot be empty',
      label: 'Address'
    },
    {
      name: 'zip',
      placeholder: '10001',
      type: 'text',
      error: ref(false),
      errorMessage: 'Cannot be empty',
      label: 'ZIP Code'
    },
    {
      name: 'city',
      placeholder: 'New York',
      type: 'text',
      error: ref(false),
      errorMessage: 'Cannot be empty',
      label: 'City'
    },
    {
      name: 'country',
      placeholder: 'United States',
      type: 'text',
      error: ref(false),
      errorMessage: 'Cannot be empty',
      label: 'Country'
    }
  ],
  paymentDetails: [
    {
      name: 'payment',
      type: 'radio',
      value: 'e-money',
      label: 'e-Money',
      data: [
        {
          name: 'e-num',
          label: 'e-Money Number',
          type: 'text',
          placeholder: '238521993'
        },
        {
          name: 'pin',
          label: 'e-Money PIN',
          type: 'text',
          placeholder: '6891'
        }
      ]
    },
    {
      name: 'payment',
      type: 'radio',
      value: 'cash',
      label: 'Cash on Delivery'
    }
  ]
}
