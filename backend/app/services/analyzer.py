import pandas as pd


def load_campaigns():
    return pd.read_csv("app/data/campaigns.csv")


def calculate_metrics(df: pd.DataFrame):
    df = df.copy()

    df["ctr"] = (df["clicks"] / df["impressions"]) * 100
    df["cpc"] = df["spend"] / df["clicks"]
    df["conversion_rate"] = (df["conversions"] / df["clicks"]) * 100
    df["roas"] = df["revenue"] / df["spend"]

    return df.round(2)


def diagnose_campaign(row):
    issues = []

    if row["ctr"] < 1:
        issues.append("Low CTR: ad creatives or targeting may be weak.")

    if row["cpc"] > 2:
        issues.append("High CPC: bidding strategy may be inefficient.")

    if row["conversion_rate"] < 3:
        issues.append("Low conversion rate: landing page or offer may need improvement.")

    if row["roas"] < 2:
        issues.append("Poor ROAS: campaign is not generating enough revenue.")

    if not issues:
        issues.append("Campaign is performing within healthy limits.")

    return issues


def get_campaign_diagnostics():
    df = calculate_metrics(load_campaigns())

    diagnostics = []
    for _, row in df.iterrows():
        issues = diagnose_campaign(row)

        health_score = 100
        health_score -= 20 if row["ctr"] < 1 else 0
        health_score -= 20 if row["cpc"] > 2 else 0
        health_score -= 25 if row["conversion_rate"] < 3 else 0
        health_score -= 25 if row["roas"] < 2 else 0

        diagnostics.append({
            "campaign_id": row["campaign_id"],
            "campaign_name": row["campaign_name"],
            "platform": row["platform"],
            "spend": row["spend"],
            "ctr": row["ctr"],
            "cpc": row["cpc"],
            "conversion_rate": row["conversion_rate"],
            "roas": row["roas"],
            "health_score": max(health_score, 0),
            "issues": issues,
            "status": row["status"]
        })

    return diagnostics