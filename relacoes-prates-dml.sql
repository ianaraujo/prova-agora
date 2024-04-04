INSERT INTO Stakeholders (ShNome, ShCargo, ShFotoUrl, ShRazao, ShPartido)
VALUES
('Luiz Inacio Lula da Silva', 'Presidente do Brasil (2023-2027)', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fpt.wikipedia.org%2Fwiki%2FLuiz_In%25C3%25A1cio_Lula_da_Silva&psig=AOvVaw0BbJ4QaaqUEihKu97MbGC9&ust=1712171395292000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLD4tdGdpIUDFQAAAAAdAAAAABAE', 'Indicou Prates para a presidencia da Petrobras', ''),
('Clarice Copetti', 'Diretora', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fspot.petrobras.com.br%2FAgendaPublica.aspx%2F%3Fautoridade%3D6vfDjMSnKb2U9Xjk8WSPtw%253D%253D&psig=AOvVaw0vJ43uZk3qHxJ0xEBINnEN&ust=1712171455446000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCNCv1O6dpIUDFQAAAAAdAAAAABAE', 'Indicada por Prates', ''),
('Alexandre Silveira', 'Ministro de Minas e Energia', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FAlexandre_Silveira&psig=AOvVaw1w2EzuDseMN7e5cp1WnyfR&ust=1712171480581000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLCUiPmdpIUDFQAAAAAdAAAAABAJ', 'Responsavel por encaminhar oficio a Petrobras', 'PSD-MG'),
('Sergio Caetano Leite', 'Diretor', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fspot.petrobras.com.br%2FAgendaPublica.aspx%2F%3Fautoridade%3DTNnhfMl6rE%252BeEDBn6DShPg%253D%253D&psig=AOvVaw1wOA1Z-sgd8qt7I-jIV98J&ust=1712171549485000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCNCr-5mepIUDFQAAAAAdAAAAABAE', 'Indicado por Prates', ''),
('Fatima Bezerra', 'Governadora do Rio Grande do Norte', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fpt.wikipedia.org%2Fwiki%2FF%25C3%25A1tima_Bezerra&psig=AOvVaw1yIkUWVI9oXf19HzchSxfq&ust=1712171583420000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLityqqepIUDFQAAAAAdAAAAABAE', 'Prates era primeiro suplente da ex-senadora', 'PT-RN'),
('William Franca da Silva', 'Diretor', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fworldrefiningassociation.com%2Fevent-speakers%2Fwilliam-franca-da-silva%2F&psig=AOvVaw1HD829pVdU1FDrGkGvorUn&ust=1712171604724000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCMjLvLSepIUDFQAAAAAdAAAAABAQ', 'Indicado por Prates', '');

INSERT INTO Relacoes (ShId, TemRelacaoShId)
VALUES
(1, 5),
(1, 3),
(3, 2),
(3, 4),
(3, 6);