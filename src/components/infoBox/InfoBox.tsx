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
        key={1}
        title={mainLaneData?.title}
        content={mainLaneData?.content}
        yapiciPotansiyeller={mainLaneData?.yapiciPotansiyeller}
        olumsuzPotansiyeller={mainLaneData?.olumsuzPotansiyeller}
        yikiciPotansiyeller={mainLaneData?.yikiciPotansiyeller}
      />
      <HareketsizBenlik
        key={2}
        title={sideLaneData?.title}
        description={sideLaneData?.description}
      />
      <KaderSayisi
        key={3}
        title={fonLaneData?.title}
        description={fonLaneData?.description}
      />
      <ChakraSutunu key={4} chakraCounts={chakraCounts} />
      <EsmaulHusna key={5} esmaulHusnaResult={esmaulHusnaResult.toString()} />
      <AuraRengi
        key={6}
        auraColor={auraColor}
        colorDescription={colorDescription}
        colorPotantial={colorPotantial}
      />
      <HayatAmaci
        key={7}
        purposeID={purposeID}
        purposeTitle={purposeTitle}
        purposeDescription={purposeDescription}
      />
      <ZirveNumaralari key={8} matchedPeaks={matchedPeaks} />
      <MucadeleNumaralari key={9} matchedStruggles={matchedStruggles} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#8576FF10",
    borderRadius: 16,
  },
});

export default InfoBox;
