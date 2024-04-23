import React from "react";
import { View, StyleSheet } from "react-native";
import RuhGudusu from "../ruhGudusu/RuhGudusu";
import HareketsizBenlik from "../hareketsizBenlik/HareketsizBenlik";
import KaderSayisi from "../kaderSayisi/KaderSayisi";
import ChakraSutunu from "../chakraSutunu/ChackraSutunu";
import EsmaulHusna from "../esmaulHusna/EsmaulHusna";
import AuraRengi from "../auraRengi/AuraRengi";
import HayatAmaci from "../hayatAmaci/HayatAmaci";
import ZirveNumaralari from "../zirveNumaralari/ZirveNumaralari";
import MucadeleNumaralari from "../mucadeleNumaralari/MucadeleNumaralari";

const InfoBox = ({
  mainLaneData,
  sideLaneData,
  fonLaneData,
  chakraCounts,
  esmaulHusnaResult,
  auraColor,
  colorDescription,
  colorPotantial,
  purposeID,
  purposeTitle,
  purposeDescription,
  matchedPeaks,
  matchedStruggles,
}) => {
  return (
    <View style={styles.container}>
      <RuhGudusu
        title={mainLaneData?.title}
        content={mainLaneData?.content}
        yapiciPotansiyeller={mainLaneData?.yapiciPotansiyeller}
        olumsuzPotansiyeller={mainLaneData?.olumsuzPotansiyeller}
        yikiciPotansiyeller={mainLaneData?.yikiciPotansiyeller}
      />
      <HareketsizBenlik
        title={sideLaneData?.title}
        description={sideLaneData?.description}
      />
      <KaderSayisi
        title={fonLaneData?.title}
        description={fonLaneData?.description}
      />
      <ChakraSutunu chakraCounts={chakraCounts} />
      <EsmaulHusna esmaulHusnaResult={esmaulHusnaResult.toString()} />
      <AuraRengi
        auraColor={auraColor}
        colorDescription={colorDescription}
        colorPotantial={colorPotantial}
      />
      <HayatAmaci
        purposeID={purposeID}
        purposeTitle={purposeTitle}
        purposeDescription={purposeDescription}
      />
      <ZirveNumaralari matchedPeaks={matchedPeaks} />
      <MucadeleNumaralari matchedStruggles={matchedStruggles} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
  },
});

export default InfoBox;
