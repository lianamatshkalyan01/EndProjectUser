import type { CollapseProps } from 'antd';
import { Collapse } from 'antd';

interface CustomCollapseItem {
    key: string;
    label: string;
    children: JSX.Element;
  }

const items: CustomCollapseItem[] = [
  {
    key: '1',
    label: 'Covid - What security procedure is established for persons entering Armenia?',
    children: <p>In the process of self-isolation and passing the coronavirus test upon entering Armenia, a change was made in the RA Government 2020 by the decision N 1756-N of October 31.
    "Accordingly, if upon entering the Republic of Armenia the person submits a maximum of 72 hours of Covid negative test and the documents substantiating it, he / she is released from self-isolation. 
    If there is no Covid negative test, the person must take a mandatory test at the sampling points located at the airport or land border crossing point և Mandatory self-isolation until a negative PCR test is obtained.
     According to the new decision of the government, upon entering the territory of the Republic of Armenia, a certificate confirming the negative result of the PCV diagnosis of coronavirus (COVID-19) is submitted, up to 72 hours old. The certificate must be in Armenian or Russian or English. A signed and stamped form should be attached, which will contain all the contact details of the research organization, the name of the manager, the name of the person examined, the number of the identity document, the date of birth, the result of the research. </p>,
  },
  {
    key: '2',
    label: 'What is a coronavirus?',
    children: <p>Coronavirus belongs to a group of viruses that cause a variety of illnesses, from the common cold to more serious illnesses such as Middle East Respiratory Syndrome (MERS-CoV) and Acute Respiratory Syndrome (SARS-CoV).
    The new coronavirus is a new subtype that was discovered in 2019 has not been found in humans until now. Coronaviruses are of animal origin, that is, they are transmitted from animals to humans. Studies have shown that, for example, SARS-CoV was transmitted to humans from cats, while MERS-CoV was transmitted from monogamous camels.
    ﻿We also know of several other coronaviruses that are present in animals but have not yet been transmitted to humans.</p>,
  },
  {
    key: '3',
    label: 'What are the symptoms of coronavirus?',
    children: <p>COVID-19 affects different people in different ways. New coronavirus infection is a respiratory disease, in most infected people the symptoms are mild or moderate, և they recover without special treatment. However, in people who have concomitant diseases or are over 60 years of age, the disease can be more severe and even fatal. 
    The main symptoms of Coronavirus are: fever
    fatigue
    dry cough
    Other symptoms include:
    difficulty breathing
    pains sore throat
    Very few people have diarrhea, nausea, runny nose.</p>,
  },
  {
    key: '4',
    label: 'How to protect yourself from infection?',
    children: <p>Basic precautions to prevent the spread of infection include regular hand washing with soap and water or alcohol-based cleansing, coughing, sneezing, covering the mouth and nose, and proper preparation of food, particularly meat and eggs. Close contact with people who have symptoms of a respiratory illness, such as coughing or sneezing, should be avoided. </p>,
  },
  {
    key: '5',
    label: 'Announcement',
    children: <p>Within the promotions published on the company's electronic public platform, the concept of free and / or gift is considered the application of a 99% discount to the price of the specified product. </p>,
  },
];

const Information: React.FC = () => {
  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  return <Collapse defaultActiveKey={['1']} onChange={onChange}>
  {items.map(item => (
    <Collapse.Panel key={item.key} header={item.label}>
      {item.children}
    </Collapse.Panel>
  ))}
</Collapse>;
};

    export default Information;


