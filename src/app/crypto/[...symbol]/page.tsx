
"use client"
import { useSearchParams } from "next/navigation";
import SymbolInfoWidget from "../../../components/crypto/details/SymbolInfoWidget"
import MainChartWidget from "../../../components/crypto/details/MainChartWidget"
import SymbolProfileWidget from "../../../components/crypto/details/SymbolProfileWidget"
import FinancialsWidget from "../../../components/crypto/details/FinancialsWidget"
import NewsWidget from "../../../components/crypto/details/NewsWidget"
import News from "@/components/crypto/home/News";


export default function Home() {
  const searchParams = useSearchParams();
  const tvwidgetsymbol = searchParams.get('tvwidgetsymbol');


  return (
    <div className="markets ptb70">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <SymbolInfoWidget symbol={tvwidgetsymbol} />
          </div>
          <br />
          <div className="col-sm-12 mt-4">
            <div className="main-chart">
              <MainChartWidget symbol={tvwidgetsymbol} />
            </div>
          </div>

          <div className="row justify-content-around mt-4" >
            <div className="col-5">
              <SymbolProfileWidget symbol={tvwidgetsymbol} />

            </div>
            <div className="col-5">
              <FinancialsWidget symbol={tvwidgetsymbol} />

            </div>
          </div>

          <div className="row">
            <NewsWidget symbol={tvwidgetsymbol} />

          </div>
        </div>
      </div>
    </div>
  );
}
