import React from "react";
import { Accordion, AccordionDetails, AccordionSummary, Divider, Stack, Typography } from "@mui/material";
import { CaretDown, DownloadSimple, Question } from "phosphor-react";

import BodyWrapper from "../../../components/body-wrapper";
import Spacer from "../../../components/spacer";
import Image from "../../../components/image/image";
import ImageGallery from "../../../components/image-gallery";

import AppIcon from "../../../assets/images/games/game-shark-a-boom.png";
import PlayStoreDLButton from "../../../assets/images/games/playstore-download-button.png";
import JayProfilePic from "../../../assets/images/games/dev-jay-r-sab.png";
import OliverProfilePic from "../../../assets/images/games/dev-oliver.png";
import { imageList as GameShowcase } from "../../../assets/images/games/game-sab-showcase/gallery-game-sab-showcase";
import Artwork from "../../../assets/images/games/sab-artwork.png";


// ---------------------------------------------------------

const Sharkaboom = () => {
  return (
    <>
      <BodyWrapper>
        {/* --------------------------------------------------------- */}
        {/* ABOUT --------------------------------------------------- */}
        {/* --------------------------------------------------------- */}
        <div id="about"></div>
        <Image src={Artwork} height={300} />
        <Spacer amount={5} />
        <Stack>
          <Typography inline align="center" variant="body2">
            🦈💥Shark-A-Boom brings you the classic PvP action to play with or against your friends in self-hosted rooms or solo with randomly matched players from all over the world across a variety of game modes. The challenge doesn't stop here. Develop your favourite Shark and Turret to secure a guaranteed victory and an awesome mobile MOBA experience!
          </Typography>
        </Stack>
        <Spacer amount={5} />
        <ImageGallery imageSet={GameShowcase} columns={5} aspectRatio={16 / 9} />
        <Spacer amount={30} />

        {/* --------------------------------------------------------- */}
        {/* FEATURES ------------------------------------------------ */}
        {/* --------------------------------------------------------- */}
        <div id="features"></div>
        <Stack alignItems={"center"} justifyContent={"center"}>
          <Typography variant="h6">❖ Features ❖</Typography>
        </Stack>
        <Spacer amount={5} />

        <Stack>
          <Typography variant="body2">
            ◆ <b><i>BATTLE</i></b> &nbsp; in real-time fast-paced multiplayer matches (solo/co-op) against players across the world.<br />
            ◆ <b><i>UPGRADE</i></b> &nbsp; your Sharks and Turrets to give yourself an edge in battle.<br />
            ◆ <b><i>UNLOCK</i></b> &nbsp; unique skins to customize your Sharks and Turrets to suit your playstyle.<br />
            ◆ <b><i>COMPETE</i></b> &nbsp; with others globally to see who conquers the top spot in the Leaderboards!<br />
            ◆ Constantly evolving with new Sharks, Turrets, skins, maps, special events and game modes in the future.
          </Typography>
        </Stack>
        <Spacer amount={30} />

        {/* --------------------------------------------------------- */}
        {/* DEVS ---------------------------------------------------- */}
        {/* --------------------------------------------------------- */}
        <div id="developers"></div>
        <Stack alignItems={"center"} justifyContent={"center"}>
          <Typography variant="h6">❖ Developers ❖</Typography>
        </Stack>
        <Spacer amount={5} />

        <Stack spacing={3}>
          <Stack spacing={1}>
            <Image src={JayProfilePic} height={200} />
            <Stack>
              <Typography inline align="center" variant="body2">
                Jay R.
              </Typography>
              <Typography inline align="center" variant="caption">
                Founder / Producer
                <br />
                Art / Programming - Design & Concept Ideas
              </Typography>
            </Stack>
          </Stack>

          <Stack spacing={1}>
            <Image src={OliverProfilePic} height={200} />
            <Stack>
              <Typography inline align="center" variant="body2">
                Oliver Sradnick
              </Typography>
              <Typography inline align="center" variant="caption">
                Great guy from Photon Engine Forums who helped me a lot during the development!
              </Typography>
            </Stack>
          </Stack>

          <Stack>
            <Typography inline align="center" variant="body2">
              <i>And... special thanks to:</i>
              <br />
              <i>Evelina and Twilight</i>
            </Typography>
          </Stack>
        </Stack>
        <Spacer amount={30} />
        <Divider />
        <Spacer amount={20} />


        {/* --------------------------------------------------------- */}
        {/* DOWNLOAD ------------------------------------------------ */}
        {/* --------------------------------------------------------- */}
        <div id="download"></div>
        <Stack direction={"row"} alignItems={"center"} justifyContent={"center"} spacing={0.75}>
          <DownloadSimple size={28} />
          <Typography variant="h5">DOWNLOAD</Typography>
        </Stack>
        <Spacer amount={10} />

        <Image
          src={AppIcon}
          height={180}
        />
        <Image
          src={PlayStoreDLButton}
          height={56}
          url="https://play.google.com/store/apps/details?id=com.jgamesentertainment.sharkpewpew"
        />

        <Stack spacing={0.5}>
          <Typography variant="h6">
            Current version:
          </Typography>
          <Stack p={0.75}>
            <Typography variant="body2">
              v0.0.39 [Public Early Access]
            </Typography>
          </Stack>
        </Stack>

        <div id="changelog"></div>
        <Stack>
          <Typography variant="h6">Changelog</Typography>
        </Stack>

        {/* ========================= */}
        {/* ========================= */}
        <Accordion>
          <AccordionSummary
            expandIcon={<CaretDown size={24} />}
            aria-controls="accordion-01-content"
            id="accordion-01-header"
          >
            <Typography variant="body2">(02/12/21)&nbsp;&nbsp;&nbsp;v0.0.39 [Public Early Access]</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="subtitle2">
              First public early access release!!
              <br />
              NOTE: The game is being frequently updated on the private branch. If you want to try out before updates are pushed to the public branch you can join my Discord and dm me :)
            </Typography>
          </AccordionDetails>
        </Accordion>
        {/* ========================= */}
        {/* ========================= */}
        <Spacer amount={20} />
        <Divider />
        <Spacer amount={20} />


        {/* --------------------------------------------------------- */}
        {/* FAQS ---------------------------------------------------- */}
        {/* --------------------------------------------------------- */}
        <div id="faqs"></div>
        <Stack direction={"row"} alignItems={"center"} justifyContent={"center"} spacing={0.75}>
          <Question size={28} />
          <Typography variant="h5">FAQs</Typography>
        </Stack>

        <Stack spacing={3}>
          <Stack spacing={0.5}>
            <Typography variant="h6">
              IPhone App Store?
            </Typography>
            <Stack p={0.75}>
              <Typography variant="body2">
                Yes! Give me sometime to iron out the bugs on the Android platform. Once it is stable, I will port it over for the iPhone.
              </Typography>
            </Stack>
          </Stack>
        </Stack>

        <Stack spacing={3}>
          <Stack spacing={0.5}>
            <Typography variant="h6">
              Desktop Version?
            </Typography>
            <Stack p={0.75}>
              <Typography variant="body2">
                This game was built on having the mobile environment in mind. There will be no desktop version of the game.
              </Typography>
            </Stack>
          </Stack>
        </Stack>

        <Stack spacing={3}>
          <Stack spacing={0.5}>
            <Typography variant="h6">
              Game Save Data?
            </Typography>
            <Stack p={0.75}>
              <Typography variant="body2">
                Every player's game save data file is saved securely <i>(encrypted to prevent human-editing)</i> and locally on their respective mobile device's root directory.
                <br /><br />
                Do note that uninstallation of the game app from your mobile device also deletes the save file permanently if you choose to remain playing as a Guest without linking your Google account <i>(see below on Cloud Saving)</i>.
              </Typography>
            </Stack>
          </Stack>
        </Stack>

        <Stack spacing={3}>
          <Stack spacing={0.5}>
            <Typography variant="h6">
              Changing Phone (or lost phone)?
            </Typography>
            <Stack p={0.75}>
              <Typography variant="body2">
                <i>See below on Cloud Saving.</i>
              </Typography>
            </Stack>
          </Stack>
        </Stack>

        <Stack spacing={3}>
          <Stack spacing={0.5}>
            <Typography variant="h6">
              Cloud Saving?
            </Typography>
            <Stack p={0.75}>
              <Typography variant="body2">
                Android - By linking your Google account <i>(In-game &gt; Settings / Signing in on the first game launch)</i>, the game automatically backs up your data using the Google Play Games Services.
              </Typography>
            </Stack>
          </Stack>
        </Stack>

        <Stack spacing={3}>
          <Stack spacing={0.5}>
            <Typography variant="h6">
              Other Questions?
            </Typography>
            <Stack p={0.75}>
              <Typography variant="body2">
                If there are questions not answered in the FAQ, please feel free to drop me a message using the contact form.
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </BodyWrapper>
    </>
  );
}


// ---------------------------------------------------------

export default Sharkaboom;