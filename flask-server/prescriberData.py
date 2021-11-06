import pandas as pd
from sys import argv

def func(arg):
    df = pd.read_csv(arg, sep=",")
    cholecap = df[df.Product == "Cholecap"]
    zap = df[df.Product == "Zap-a-Pain"]
    trx = cholecap.loc[:,cholecap.columns.str.startswith("TRx")]
    names = cholecap.loc[:,cholecap.columns.str.endswith("name")]
    result = pd.concat([names, trx], axis=1)
    result = result.to_json()
    #print(df["Product"].unique())
    return (result)


if __name__ == "__main__":
    func()
