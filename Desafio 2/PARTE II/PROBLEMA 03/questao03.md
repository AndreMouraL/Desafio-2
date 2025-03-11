
## Tarefa
3. Realize o tratamento dos dados na coluna 'Renda per capita', corrigindo os valores faltante, por meio de interpolação linear. Em seguida, crie um gráfico que apresente a renda per capita ao longo dos anos, comparando os dados antes e depois do tratamento.

## Conceito de interpolação (Alura) Estudo.

Descrição do funcionamento para Interpolação Linear

![termom](https://github.com/user-attachments/assets/1fd428b3-db5e-46a3-a413-a54fddb1a58a)

![Tm01](https://github.com/user-attachments/assets/969c3c1f-08ff-481a-9da3-c3c36a478ce2)

![Tm02](https://github.com/user-attachments/assets/b5b6d698-6f17-42a5-bc5a-c9342bbe2e4e)


## Cálculos

Realizei os cálculos via Overleaf pra ter uma  confirmação dos valores  interpolados e também farei em  Google Sheets, mostrando também as tabelas calculadas a seguir.

![Fórmula da Interpolação Linear](https://latex.codecogs.com/svg.image?\dpi{110}&space;\color{White}y&space;=&space;y_1&space;+&space;\frac{(y_2&space;-&space;y_1)}{(x_2&space;-&space;x_1)}&space;\cdot&space;(x&space;-&space;x_1))



![ITL](https://github.com/user-attachments/assets/ac9d4ef1-f681-4db2-87b1-fc9da649ef67)

![INL - Copia](https://github.com/user-attachments/assets/4c23b980-b040-4e79-89e3-f924f33d8cb4)


## Dados Econômicos e Populacionais

| Ano  | População Estimada | PIB Estimado (R$ em Bilhões) | Renda per capita | Interpolação (Renda per capita) |
|------|--------------------|----------------------------|------------------|---------------------------------|
| 2010 | 6.574.789         | R$52,10                    | R$ 660,00        | R$ 660,00                       |
| 2011 | 6.651.000         | R$52,20                    | R$ 665,00        | R$ 665,00                       |
| 2012 | 6.727.000         | R$58,80                    | R$ 682,00        | R$ 682,00                       |
| 2013 | 6.803.000         | R$68,50                    | R$ 680,00        | R$ 680,00                       |
| 2014 | 6.850.884         | R$76,84                    | R$ 690,00        | R$ 690,00                       |
| 2015 | 6.904.241         | R$78,48                    | *N/A*            | R$ 692,00                       |
| 2016 | 6.954.036         | R$85,31                    | R$ 694,00        | R$ 694,00                       |
| 2017 | 7.001.161         | R$89,54                    | *N/A*            | R$ 701,50                       |
| 2018 | 7.045.055         | R$98,18                    | R$ 709,00        | R$ 709,00                       |
| 2019 | 7.087.262         | R$97,34                    | R$ 754,00        | R$ 754,00                       |
| 2020 | 7.130.000         | R$106,92                   | R$ 814,00        | R$ 814,00                       |
| 2021 | 7.153.262         | R$124,98                   | *N/A*            | R$ 814,00                       |
| 2022 | 6.775.152         | R$130,00                   | R$ 814,00        | R$ 814,00                       |
| 2023 | 6.776.699         | R$135,00                   | R$ 969,00        | R$ 969,00                       |
| 2024 | 7.010.960         | R$140,00                   | R$ 969,00        | R$ 969,00                       |


## Gráficos 

Sem Interpolação.

![Renda per capita por ano](https://github.com/user-attachments/assets/ce66555f-d172-483f-bd4b-3ea15e06227b)

Com Interpolação.

![Renda per capita por ano (1)](https://github.com/user-attachments/assets/4cf2226f-10cc-41a1-a4c3-4519bdfad1cb)



## Resumo
 Análise de dados com Interpolação Linear  substituindo os lavores não encontrados por  valores próximos a média.
<p align="justify">
 O gráfico de Renda per capita por ano apresenta uma análise da evolução dos valores ao longo do tempo, destacando a interpolação dos dados. A linha azul representa os valores reais observados, enquanto a linha vermelha indica a tendência estimada. Observa-se um crescimento geral da renda per capita, com algumas oscilações ao longo dos anos. Entre 2022 e 2024, há um aumento significativo, sugerindo um período de crescimento econômico mais acelerado.
</p>
<p align="justify">
A interpolação utilizada ajuda a suavizar as variações e identificar a tendência de longo prazo, mas não captura eventos específicos que podem ter influenciado os valores reais. As discrepâncias entre a linha azul e a interpolação indicam possíveis fatores econômicos ou sociais que impactaram a renda per capita em determinados anos.
</p>

<!--![Fórmula da Interpolação Linear](https://latex.codecogs.com/svg.image?\dpi{110}f(x)%20=%20f(x_0)%20+%20\frac{(x%20-%20x_0)%20\cdot%20(f(x_1)%20-%20f(x_0))}{x_1%20-%20x_0})-->

## Google Sheets:
O estudo foi realizado no Google Sheets para análise de dados para questão 3, que pode ser acessado [neste link](https://docs.google.com/spreadsheets/d/1mGFcJQ4haugvqLcHhYjo-9yQGjiMTzmd93ZD702NckI/edit?usp=sharing).



