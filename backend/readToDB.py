import pandas as pd
import xlrd
import pymysql
from sqlalchemy import create_engine

file = r'IMEX-IN-2016-06-EX.part2.xlsx'
df = pd.read_excel(file)

data = df.head()
#print(format(data))

# connect to db: pymysql
# ORM: sqlalchemy

engine = create_engine("mysql+pymysql://root:177177ooo@localhost:3306/isynet",encoding='utf-8')

df.to_sql("export",con=engine,if_exists='replace',index=False)

