import React, {useState} from 'react';

import {
  IconDinamic,
  TextInputDinamic,
  TextInputDinamicProps,
} from '@components';

export type TextInputPasswordDinamicProps = Omit<
  TextInputDinamicProps,
  'rightComponent'
>;

const TextInputPasswordDinamic = (props: TextInputPasswordDinamicProps) => {
  const [isSecurityTextEntry, setIsSecurityTextEntry] = useState(true);

  const toggleSecurityTextEntry = () => {
    setIsSecurityTextEntry(prev => !prev);
  };

  return (
    <TextInputDinamic
      secureTextEntry={isSecurityTextEntry}
      {...props}
      rightComponent={
        <IconDinamic
          onPress={toggleSecurityTextEntry}
          color="gray2"
          name={isSecurityTextEntry ? 'eyeOn' : 'eyeOff'}
        />
      }
    />
  );
};

export {TextInputPasswordDinamic};
