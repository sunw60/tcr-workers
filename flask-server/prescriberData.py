import pandas as pd
from sys import argv

def func():
    df = pd.read_csv(argv[1], sep=",")
    cholecap = df[df.Product == "Cholecap"]
    zap = df[df.Product == "Zap-a-Pain"]
    trx = cholecap.loc[:,cholecap.columns.str.startswith("TRx")]
    names = cholecap.loc[:,cholecap.columns.str.endswith("name")]
    #print(df["Product"].unique())
    print(trx)


if __name__ == "__main__":
    func()
