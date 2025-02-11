<!-- Please remove this file from your project -->
<template>
  <div
    class="icon-brew-icon"
    @mouseover="mouseOver"
    @mouseleave="mouseOut"
    :id="icon"
  >
<!-- <img
  v-if="icon?.icon?.base64_24px"
  :src="icon.icon.base64_24px"
  :width="size"
  :height="size"
  :style="{ color: iconColor }"
/> -->
    <div
      v-if="icon?.icon?.base64_24px"
      v-html="svgContent"
      :style="{ width: `${size}px`, height: `${size}px`, color: iconColor }"
      class="svg-container"
    ></div>

    <component v-else :is="iconComp()" :size="size"></component>

  </div>
</template>

<script>
  import { defineAsyncComponent } from "vue";

  export default {
    name: 'IconBrewIcon',

    components:{
      AbcIcon: defineAsyncComponent(() => import('@/components/icons/AbcIcon.vue')),
      AcademicBookIcon: defineAsyncComponent(() => import('@/components/icons/AcademicBookIcon.vue')),
      AccessibilityIcon: defineAsyncComponent(() => import('@/components/icons/AccessibilityIcon.vue')),
      ActivityIcon: defineAsyncComponent(() => import('@/components/icons/ActivityIcon.vue')),
      AddIcon: defineAsyncComponent(() => import('@/components/icons/AddIcon.vue')),
      AddToPlaylistIcon: defineAsyncComponent(() => import('@/components/icons/AddToPlaylistIcon.vue')),
      AirplayIcon: defineAsyncComponent(() => import('@/components/icons/AirplayIcon.vue')),
      AlarmClock2Icon: defineAsyncComponent(() => import('@/components/icons/AlarmClock2Icon.vue')),
      AlarmClockIcon: defineAsyncComponent(() => import('@/components/icons/AlarmClockIcon.vue')),
      AlertWithCircleIcon: defineAsyncComponent(() => import('@/components/icons/AlertWithCircleIcon.vue')),
      AlgoliaIcon: defineAsyncComponent(() => import('@/components/icons/AlgoliaIcon.vue')),
      AnalogueWatchIcon: defineAsyncComponent(() => import('@/components/icons/AnalogueWatchIcon.vue')),
      AppleIcon: defineAsyncComponent(() => import('@/components/icons/AppleIcon.vue')),
      AppleWatchIcon: defineAsyncComponent(() => import('@/components/icons/AppleWatchIcon.vue')),
      ArchiveIcon: defineAsyncComponent(() => import('@/components/icons/ArchiveIcon.vue')),
      ArrowBendLeftDownIcon: defineAsyncComponent(() => import('@/components/icons/ArrowBendLeftDownIcon.vue')),
      ArrowBendLeftUpIcon: defineAsyncComponent(() => import('@/components/icons/ArrowBendLeftUpIcon.vue')),
      ArrowBendRightDownIcon: defineAsyncComponent(() => import('@/components/icons/ArrowBendRightDownIcon.vue')),
      ArrowBendRightUpIcon: defineAsyncComponent(() => import('@/components/icons/ArrowBendRightUpIcon.vue')),
      ArrowBottomRightIcon: defineAsyncComponent(() => import('@/components/icons/ArrowBottomRightIcon.vue')),
      ArrowCircleBackwardIcon: defineAsyncComponent(() => import('@/components/icons/ArrowCircleBackwardIcon.vue')),
      ArrowCircleBackwardFiveIcon: defineAsyncComponent(() => import('@/components/icons/ArrowCircleBackwardFiveIcon.vue')),
      ArrowCircleBackwardFiveteenIcon: defineAsyncComponent(() => import('@/components/icons/ArrowCircleBackwardFiveteenIcon.vue')),
      ArrowCircleBackwardTenIcon: defineAsyncComponent(() => import('@/components/icons/ArrowCircleBackwardTenIcon.vue')),
      ArrowCircleBackwardTwentyIcon: defineAsyncComponent(() => import('@/components/icons/ArrowCircleBackwardTwentyIcon.vue')),
      ArrowCircleBckwardsThirtyIcon: defineAsyncComponent(() => import('@/components/icons/ArrowCircleBckwardsThirtyIcon.vue')),
      ArrowCircleForwardIcon: defineAsyncComponent(() => import('@/components/icons/ArrowCircleForwardIcon.vue')),
      ArrowCircleForwardFiveIcon: defineAsyncComponent(() => import('@/components/icons/ArrowCircleForwardFiveIcon.vue')),
      ArrowCircleForwardFiveteenIcon: defineAsyncComponent(() => import('@/components/icons/ArrowCircleForwardFiveteenIcon.vue')),
      ArrowCircleForwardTenIcon: defineAsyncComponent(() => import('@/components/icons/ArrowCircleForwardTenIcon.vue')),
      ArrowCircleForwardThirtyIcon: defineAsyncComponent(() => import('@/components/icons/ArrowCircleForwardThirtyIcon.vue')),
      ArrowCircleForwardTwentyIcon: defineAsyncComponent(() => import('@/components/icons/ArrowCircleForwardTwentyIcon.vue')),
      ArrowDownIcon: defineAsyncComponent(() => import('@/components/icons/ArrowDownIcon.vue')),
      ArrowDownLeftIcon: defineAsyncComponent(() => import('@/components/icons/ArrowDownLeftIcon.vue')),
      ArrowLeftIcon: defineAsyncComponent(() => import('@/components/icons/ArrowLeftIcon.vue')),
      ArrowRightIcon: defineAsyncComponent(() => import('@/components/icons/ArrowRightIcon.vue')),
      ArrowSwitchIcon: defineAsyncComponent(() => import('@/components/icons/ArrowSwitchIcon.vue')),
      ArrowThickDownIcon: defineAsyncComponent(() => import('@/components/icons/ArrowThickDownIcon.vue')),
      ArrowThickLeftIcon: defineAsyncComponent(() => import('@/components/icons/ArrowThickLeftIcon.vue')),
      ArrowThickRightIcon: defineAsyncComponent(() => import('@/components/icons/ArrowThickRightIcon.vue')),
      ArrowThickUpIcon: defineAsyncComponent(() => import('@/components/icons/ArrowThickUpIcon.vue')),
      ArrowUpIcon: defineAsyncComponent(() => import('@/components/icons/ArrowUpIcon.vue')),
      ArrowUpLeftIcon: defineAsyncComponent(() => import('@/components/icons/ArrowUpLeftIcon.vue')),
      ArrowUpRightIcon: defineAsyncComponent(() => import('@/components/icons/ArrowUpRightIcon.vue')),
      BankIcon: defineAsyncComponent(() => import('@/components/icons/BankIcon.vue')),
      BasketballIcon: defineAsyncComponent(() => import('@/components/icons/BasketballIcon.vue')),
      BatteryHorizontalChargingIcon: defineAsyncComponent(() => import('@/components/icons/BatteryHorizontalChargingIcon.vue')),
      BatteryHorizontalEmptyIcon: defineAsyncComponent(() => import('@/components/icons/BatteryHorizontalEmptyIcon.vue')),
      BatteryHorizontalFullHorizontalIcon: defineAsyncComponent(() => import('@/components/icons/BatteryHorizontalFullHorizontalIcon.vue')),
      BatteryHorizontalLowIcon: defineAsyncComponent(() => import('@/components/icons/BatteryHorizontalLowIcon.vue')),
      BatteryHorizontalMediumIcon: defineAsyncComponent(() => import('@/components/icons/BatteryHorizontalMediumIcon.vue')),
      BatteryVerticalChargingIcon: defineAsyncComponent(() => import('@/components/icons/BatteryVerticalChargingIcon.vue')),
      BatteryVerticalEmptyIcon: defineAsyncComponent(() => import('@/components/icons/BatteryVerticalEmptyIcon.vue')),
      BatteryVerticalFullIcon: defineAsyncComponent(() => import('@/components/icons/BatteryVerticalFullIcon.vue')),
      BatteryVerticalLowIcon: defineAsyncComponent(() => import('@/components/icons/BatteryVerticalLowIcon.vue')),
      BatteryVerticalMediumIcon: defineAsyncComponent(() => import('@/components/icons/BatteryVerticalMediumIcon.vue')),
      BeakerIcon: defineAsyncComponent(() => import('@/components/icons/BeakerIcon.vue')),
      BellIcon: defineAsyncComponent(() => import('@/components/icons/BellIcon.vue')),
      BoldIcon: defineAsyncComponent(() => import('@/components/icons/BoldIcon.vue')),
      BoolExcludeIcon: defineAsyncComponent(() => import('@/components/icons/BoolExcludeIcon.vue')),
      BoolIntersectIcon: defineAsyncComponent(() => import('@/components/icons/BoolIntersectIcon.vue')),
      BoolSubtractIcon: defineAsyncComponent(() => import('@/components/icons/BoolSubtractIcon.vue')),
      BoolUnionIcon: defineAsyncComponent(() => import('@/components/icons/BoolUnionIcon.vue')),
      BorderAllIcon: defineAsyncComponent(() => import('@/components/icons/BorderAllIcon.vue')),
      BorderBottomIcon: defineAsyncComponent(() => import('@/components/icons/BorderBottomIcon.vue')),
      BorderHorizontalIcon: defineAsyncComponent(() => import('@/components/icons/BorderHorizontalIcon.vue')),
      BorderLeftIcon: defineAsyncComponent(() => import('@/components/icons/BorderLeftIcon.vue')),
      BorderRightIcon: defineAsyncComponent(() => import('@/components/icons/BorderRightIcon.vue')),
      BorderTopIcon: defineAsyncComponent(() => import('@/components/icons/BorderTopIcon.vue')),
      BorderVerticalIcon: defineAsyncComponent(() => import('@/components/icons/BorderVerticalIcon.vue')),
      BrightnessDownIcon: defineAsyncComponent(() => import('@/components/icons/BrightnessDownIcon.vue')),
      BrightnessUpIcon: defineAsyncComponent(() => import('@/components/icons/BrightnessUpIcon.vue')),
      BulletListIcon: defineAsyncComponent(() => import('@/components/icons/BulletListIcon.vue')),
      BurgerMenuIcon: defineAsyncComponent(() => import('@/components/icons/BurgerMenuIcon.vue')),
      CalculatorIcon: defineAsyncComponent(() => import('@/components/icons/CalculatorIcon.vue')),
      Calendar2Icon: defineAsyncComponent(() => import('@/components/icons/Calendar2Icon.vue')),
      Calendar2BookingIcon: defineAsyncComponent(() => import('@/components/icons/Calendar2BookingIcon.vue')),
      CalendarIcon: defineAsyncComponent(() => import('@/components/icons/CalendarIcon.vue')),
      CalendarBookingIcon: defineAsyncComponent(() => import('@/components/icons/CalendarBookingIcon.vue')),
      CameraIcon: defineAsyncComponent(() => import('@/components/icons/CameraIcon.vue')),
      CapitaliseTextIcon: defineAsyncComponent(() => import('@/components/icons/CapitaliseTextIcon.vue')),
      CarIcon: defineAsyncComponent(() => import('@/components/icons/CarIcon.vue')),
      CategoriesIcon: defineAsyncComponent(() => import('@/components/icons/CategoriesIcon.vue')),
      ChartBarIcon: defineAsyncComponent(() => import('@/components/icons/ChartBarIcon.vue')),
      ChartPieIcon: defineAsyncComponent(() => import('@/components/icons/ChartPieIcon.vue')),
      CheckIcon: defineAsyncComponent(() => import('@/components/icons/CheckIcon.vue')),
      CheckWithCircleIcon: defineAsyncComponent(() => import('@/components/icons/CheckWithCircleIcon.vue')),
      ChevronDoubleDownIcon: defineAsyncComponent(() => import('@/components/icons/ChevronDoubleDownIcon.vue')),
      ChevronDoubleLeftIcon: defineAsyncComponent(() => import('@/components/icons/ChevronDoubleLeftIcon.vue')),
      ChevronDoubleRightIcon: defineAsyncComponent(() => import('@/components/icons/ChevronDoubleRightIcon.vue')),
      ChevronDoubleUpIcon: defineAsyncComponent(() => import('@/components/icons/ChevronDoubleUpIcon.vue')),
      ChevronDownIcon: defineAsyncComponent(() => import('@/components/icons/ChevronDownIcon.vue')),
      ChevronLeftIcon: defineAsyncComponent(() => import('@/components/icons/ChevronLeftIcon.vue')),
      ChevronRightIcon: defineAsyncComponent(() => import('@/components/icons/ChevronRightIcon.vue')),
      ChevronUpIcon: defineAsyncComponent(() => import('@/components/icons/ChevronUpIcon.vue')),
      ChipIcon: defineAsyncComponent(() => import('@/components/icons/ChipIcon.vue')),
      ChromaticaIcon: defineAsyncComponent(() => import('@/components/icons/ChromaticaIcon.vue')),
      ChromecastIcon: defineAsyncComponent(() => import('@/components/icons/ChromecastIcon.vue')),
      CircleIcon: defineAsyncComponent(() => import('@/components/icons/CircleIcon.vue')),
      CircleCircleIcon: defineAsyncComponent(() => import('@/components/icons/CircleCircleIcon.vue')),
      CircleCircleDownIcon: defineAsyncComponent(() => import('@/components/icons/CircleCircleDownIcon.vue')),
      CircleCircleLeftIcon: defineAsyncComponent(() => import('@/components/icons/CircleCircleLeftIcon.vue')),
      CircleCircleRightIcon: defineAsyncComponent(() => import('@/components/icons/CircleCircleRightIcon.vue')),
      CircleCircleUpIcon: defineAsyncComponent(() => import('@/components/icons/CircleCircleUpIcon.vue')),
      CircleSquareIcon: defineAsyncComponent(() => import('@/components/icons/CircleSquareIcon.vue')),
      CircleTriangleIcon: defineAsyncComponent(() => import('@/components/icons/CircleTriangleIcon.vue')),
      CircleWithBlocksIcon: defineAsyncComponent(() => import('@/components/icons/CircleWithBlocksIcon.vue')),
      CircleWithCrossIcon: defineAsyncComponent(() => import('@/components/icons/CircleWithCrossIcon.vue')),
      ClarusTheDogcowIcon: defineAsyncComponent(() => import('@/components/icons/ClarusTheDogcowIcon.vue')),
      ClipboardEmptyIcon: defineAsyncComponent(() => import('@/components/icons/ClipboardEmptyIcon.vue')),
      ClipboardFullIcon: defineAsyncComponent(() => import('@/components/icons/ClipboardFullIcon.vue')),
      ClockIcon: defineAsyncComponent(() => import('@/components/icons/ClockIcon.vue')),
      CloseIcon: defineAsyncComponent(() => import('@/components/icons/CloseIcon.vue')),
      CloseFullScreenArrowIcon: defineAsyncComponent(() => import('@/components/icons/CloseFullScreenArrowIcon.vue')),
      CloudIcon: defineAsyncComponent(() => import('@/components/icons/CloudIcon.vue')),
      CommandIcon: defineAsyncComponent(() => import('@/components/icons/CommandIcon.vue')),
      ConnectionsIcon: defineAsyncComponent(() => import('@/components/icons/ConnectionsIcon.vue')),
      ConnectivityIcon: defineAsyncComponent(() => import('@/components/icons/ConnectivityIcon.vue')),
      ContrastIcon: defineAsyncComponent(() => import('@/components/icons/ContrastIcon.vue')),
      CreativeCloudIcon: defineAsyncComponent(() => import('@/components/icons/CreativeCloudIcon.vue')),
      CreditCardIcon: defineAsyncComponent(() => import('@/components/icons/CreditCardIcon.vue')),
      CrossWithCircleIcon: defineAsyncComponent(() => import('@/components/icons/CrossWithCircleIcon.vue')),
      CrownIcon: defineAsyncComponent(() => import('@/components/icons/CrownIcon.vue')),
      CursorDefaultIcon: defineAsyncComponent(() => import('@/components/icons/CursorDefaultIcon.vue')),
      CursorPointerIcon: defineAsyncComponent(() => import('@/components/icons/CursorPointerIcon.vue')),
      DashboardIcon: defineAsyncComponent(() => import('@/components/icons/DashboardIcon.vue')),
      DashboardOneIsFilledIcon: defineAsyncComponent(() => import('@/components/icons/DashboardOneIsFilledIcon.vue')),
      DatabseIcon: defineAsyncComponent(() => import('@/components/icons/DatabseIcon.vue')),
      DisplayZoomIcon: defineAsyncComponent(() => import('@/components/icons/DisplayZoomIcon.vue')),
      DocumentIcon: defineAsyncComponent(() => import('@/components/icons/DocumentIcon.vue')),
      DocumentCodeIcon: defineAsyncComponent(() => import('@/components/icons/DocumentCodeIcon.vue')),
      DocumentPhotoIcon: defineAsyncComponent(() => import('@/components/icons/DocumentPhotoIcon.vue')),
      DocumentTextIcon: defineAsyncComponent(() => import('@/components/icons/DocumentTextIcon.vue')),
      DocumentVideoIcon: defineAsyncComponent(() => import('@/components/icons/DocumentVideoIcon.vue')),
      DotIcon: defineAsyncComponent(() => import('@/components/icons/DotIcon.vue')),
      DotMatrixIcon: defineAsyncComponent(() => import('@/components/icons/DotMatrixIcon.vue')),
      DownloadIcon: defineAsyncComponent(() => import('@/components/icons/DownloadIcon.vue')),
      DpadIcon: defineAsyncComponent(() => import('@/components/icons/DpadIcon.vue')),
      EarthIcon: defineAsyncComponent(() => import('@/components/icons/EarthIcon.vue')),
      EllipsesHorizontalIcon: defineAsyncComponent(() => import('@/components/icons/EllipsesHorizontalIcon.vue')),
      EllipsesVerticalIcon: defineAsyncComponent(() => import('@/components/icons/EllipsesVerticalIcon.vue')),
      EmailIcon: defineAsyncComponent(() => import('@/components/icons/EmailIcon.vue')),
      EntertainmentIcon: defineAsyncComponent(() => import('@/components/icons/EntertainmentIcon.vue')),
      EqualIcon: defineAsyncComponent(() => import('@/components/icons/EqualIcon.vue')),
      EuroIcon: defineAsyncComponent(() => import('@/components/icons/EuroIcon.vue')),
      EuroWithCircleIcon: defineAsyncComponent(() => import('@/components/icons/EuroWithCircleIcon.vue')),
      ExclamationMarkIcon: defineAsyncComponent(() => import('@/components/icons/ExclamationMarkIcon.vue')),
      ExpandHorizontalIcon: defineAsyncComponent(() => import('@/components/icons/ExpandHorizontalIcon.vue')),
      ExpandVerticalIcon: defineAsyncComponent(() => import('@/components/icons/ExpandVerticalIcon.vue')),
      EyeIcon: defineAsyncComponent(() => import('@/components/icons/EyeIcon.vue')),
      FigmaIcon: defineAsyncComponent(() => import('@/components/icons/FigmaIcon.vue')),
      FilmIcon: defineAsyncComponent(() => import('@/components/icons/FilmIcon.vue')),
      FiltersIcon: defineAsyncComponent(() => import('@/components/icons/FiltersIcon.vue')),
      FlagIcon: defineAsyncComponent(() => import('@/components/icons/FlagIcon.vue')),
      FlameIcon: defineAsyncComponent(() => import('@/components/icons/FlameIcon.vue')),
      Folder2Icon: defineAsyncComponent(() => import('@/components/icons/Folder2Icon.vue')),
      FolderIcon: defineAsyncComponent(() => import('@/components/icons/FolderIcon.vue')),
      FolderAddIcon: defineAsyncComponent(() => import('@/components/icons/FolderAddIcon.vue')),
      FolderAlertIcon: defineAsyncComponent(() => import('@/components/icons/FolderAlertIcon.vue')),
      FolderCrossIcon: defineAsyncComponent(() => import('@/components/icons/FolderCrossIcon.vue')),
      FolderMinusIcon: defineAsyncComponent(() => import('@/components/icons/FolderMinusIcon.vue')),
      FolderTickIcon: defineAsyncComponent(() => import('@/components/icons/FolderTickIcon.vue')),
      FoldersIcon: defineAsyncComponent(() => import('@/components/icons/FoldersIcon.vue')),
      FullScreenIcon: defineAsyncComponent(() => import('@/components/icons/FullScreenIcon.vue')),
      FullScreenArrowIcon: defineAsyncComponent(() => import('@/components/icons/FullScreenArrowIcon.vue')),
      GamesIcon: defineAsyncComponent(() => import('@/components/icons/GamesIcon.vue')),
      GithubIcon: defineAsyncComponent(() => import('@/components/icons/GithubIcon.vue')),
      GlobeIcon: defineAsyncComponent(() => import('@/components/icons/GlobeIcon.vue')),
      GraphLineDownIcon: defineAsyncComponent(() => import('@/components/icons/GraphLineDownIcon.vue')),
      GraphLineUpIcon: defineAsyncComponent(() => import('@/components/icons/GraphLineUpIcon.vue')),
      GraphicsAndDesignIcon: defineAsyncComponent(() => import('@/components/icons/GraphicsAndDesignIcon.vue')),
      GridIcon: defineAsyncComponent(() => import('@/components/icons/GridIcon.vue')),
      HammerIcon: defineAsyncComponent(() => import('@/components/icons/HammerIcon.vue')),
      HeadphonesIcon: defineAsyncComponent(() => import('@/components/icons/HeadphonesIcon.vue')),
      HealthAndFitnessIcon: defineAsyncComponent(() => import('@/components/icons/HealthAndFitnessIcon.vue')),
      HeartIcon: defineAsyncComponent(() => import('@/components/icons/HeartIcon.vue')),
      HeartbeatMonitorIcon: defineAsyncComponent(() => import('@/components/icons/HeartbeatMonitorIcon.vue')),
      HelmIcon: defineAsyncComponent(() => import('@/components/icons/HelmIcon.vue')),
      HelmetIcon: defineAsyncComponent(() => import('@/components/icons/HelmetIcon.vue')),
      HelmetWithLightsIcon: defineAsyncComponent(() => import('@/components/icons/HelmetWithLightsIcon.vue')),
      HoopsIcon: defineAsyncComponent(() => import('@/components/icons/HoopsIcon.vue')),
      HotBrewIcon: defineAsyncComponent(() => import('@/components/icons/HotBrewIcon.vue')),
      HouseIcon: defineAsyncComponent(() => import('@/components/icons/HouseIcon.vue')),
      HugContentHorizontalIcon: defineAsyncComponent(() => import('@/components/icons/HugContentHorizontalIcon.vue')),
      HugContentVerticalIcon: defineAsyncComponent(() => import('@/components/icons/HugContentVerticalIcon.vue')),
      IconBrewIcon: defineAsyncComponent(() => import('@/components/icons/IconBrewIcon.vue')),
      InboxTrayIcon: defineAsyncComponent(() => import('@/components/icons/InboxTrayIcon.vue')),
      InternetBrowserIcon: defineAsyncComponent(() => import('@/components/icons/InternetBrowserIcon.vue')),
      IphoneIcon: defineAsyncComponent(() => import('@/components/icons/IphoneIcon.vue')),
      ItalicIcon: defineAsyncComponent(() => import('@/components/icons/ItalicIcon.vue')),
      KeyIcon: defineAsyncComponent(() => import('@/components/icons/KeyIcon.vue')),
      LaptopIcon: defineAsyncComponent(() => import('@/components/icons/LaptopIcon.vue')),
      LayoutBottomIcon: defineAsyncComponent(() => import('@/components/icons/LayoutBottomIcon.vue')),
      LayoutLeftIcon: defineAsyncComponent(() => import('@/components/icons/LayoutLeftIcon.vue')),
      LayoutRightIcon: defineAsyncComponent(() => import('@/components/icons/LayoutRightIcon.vue')),
      LayoutTopIcon: defineAsyncComponent(() => import('@/components/icons/LayoutTopIcon.vue')),
      LifeBuoyIcon: defineAsyncComponent(() => import('@/components/icons/LifeBuoyIcon.vue')),
      LightBulbIcon: defineAsyncComponent(() => import('@/components/icons/LightBulbIcon.vue')),
      LightningIcon: defineAsyncComponent(() => import('@/components/icons/LightningIcon.vue')),
      LightsOffIcon: defineAsyncComponent(() => import('@/components/icons/LightsOffIcon.vue')),
      LightsOnIcon: defineAsyncComponent(() => import('@/components/icons/LightsOnIcon.vue')),
      LineChartDownIcon: defineAsyncComponent(() => import('@/components/icons/LineChartDownIcon.vue')),
      LineChartDownArrowIcon: defineAsyncComponent(() => import('@/components/icons/LineChartDownArrowIcon.vue')),
      LineChartUpIcon: defineAsyncComponent(() => import('@/components/icons/LineChartUpIcon.vue')),
      LineChartUpArrowIcon: defineAsyncComponent(() => import('@/components/icons/LineChartUpArrowIcon.vue')),
      LineWeightIcon: defineAsyncComponent(() => import('@/components/icons/LineWeightIcon.vue')),
      LinkIcon: defineAsyncComponent(() => import('@/components/icons/LinkIcon.vue')),
      LoaderIcon: defineAsyncComponent(() => import('@/components/icons/LoaderIcon.vue')),
      LocationIcon: defineAsyncComponent(() => import('@/components/icons/LocationIcon.vue')),
      LockedIcon: defineAsyncComponent(() => import('@/components/icons/LockedIcon.vue')),
      MacMiniIcon: defineAsyncComponent(() => import('@/components/icons/MacMiniIcon.vue')),
      MacWindowIcon: defineAsyncComponent(() => import('@/components/icons/MacWindowIcon.vue')),
      MacintoshIcon: defineAsyncComponent(() => import('@/components/icons/MacintoshIcon.vue')),
      MagicWandIcon: defineAsyncComponent(() => import('@/components/icons/MagicWandIcon.vue')),
      MapFoldedIcon: defineAsyncComponent(() => import('@/components/icons/MapFoldedIcon.vue')),
      MasoneryIcon: defineAsyncComponent(() => import('@/components/icons/MasoneryIcon.vue')),
      MedicalIcon: defineAsyncComponent(() => import('@/components/icons/MedicalIcon.vue')),
      MessageBubbleIcon: defineAsyncComponent(() => import('@/components/icons/MessageBubbleIcon.vue')),
      MessageBubbleWithEllipsesIcon: defineAsyncComponent(() => import('@/components/icons/MessageBubbleWithEllipsesIcon.vue')),
      MicrophoneIcon: defineAsyncComponent(() => import('@/components/icons/MicrophoneIcon.vue')),
      MoneyNoteIcon: defineAsyncComponent(() => import('@/components/icons/MoneyNoteIcon.vue')),
      MoonIcon: defineAsyncComponent(() => import('@/components/icons/MoonIcon.vue')),
      MouseRectangularIcon: defineAsyncComponent(() => import('@/components/icons/MouseRectangularIcon.vue')),
      MouseRectangularWiredIcon: defineAsyncComponent(() => import('@/components/icons/MouseRectangularWiredIcon.vue')),
      MouseRoundedIcon: defineAsyncComponent(() => import('@/components/icons/MouseRoundedIcon.vue')),
      MouseRoundedWiredIcon: defineAsyncComponent(() => import('@/components/icons/MouseRoundedWiredIcon.vue')),
      MusicIcon: defineAsyncComponent(() => import('@/components/icons/MusicIcon.vue')),
      MusicNoteIcon: defineAsyncComponent(() => import('@/components/icons/MusicNoteIcon.vue')),
      NewsIcon: defineAsyncComponent(() => import('@/components/icons/NewsIcon.vue')),
      NightIcon: defineAsyncComponent(() => import('@/components/icons/NightIcon.vue')),
      NumbersIcon: defineAsyncComponent(() => import('@/components/icons/NumbersIcon.vue')),
      OpenSourceIcon: defineAsyncComponent(() => import('@/components/icons/OpenSourceIcon.vue')),
      OptionIcon: defineAsyncComponent(() => import('@/components/icons/OptionIcon.vue')),
      OutboxTrayIcon: defineAsyncComponent(() => import('@/components/icons/OutboxTrayIcon.vue')),
      PaddingAllIcon: defineAsyncComponent(() => import('@/components/icons/PaddingAllIcon.vue')),
      PaddingBottomIcon: defineAsyncComponent(() => import('@/components/icons/PaddingBottomIcon.vue')),
      PaddingHorizontalIcon: defineAsyncComponent(() => import('@/components/icons/PaddingHorizontalIcon.vue')),
      PaddingLeftIcon: defineAsyncComponent(() => import('@/components/icons/PaddingLeftIcon.vue')),
      PaddingRightIcon: defineAsyncComponent(() => import('@/components/icons/PaddingRightIcon.vue')),
      PaddingTopIcon: defineAsyncComponent(() => import('@/components/icons/PaddingTopIcon.vue')),
      PaddingVerticalIcon: defineAsyncComponent(() => import('@/components/icons/PaddingVerticalIcon.vue')),
      PauseIcon: defineAsyncComponent(() => import('@/components/icons/PauseIcon.vue')),
      PeaceIcon: defineAsyncComponent(() => import('@/components/icons/PeaceIcon.vue')),
      PencilIcon: defineAsyncComponent(() => import('@/components/icons/PencilIcon.vue')),
      PencilTipIcon: defineAsyncComponent(() => import('@/components/icons/PencilTipIcon.vue')),
      PersonIcon: defineAsyncComponent(() => import('@/components/icons/PersonIcon.vue')),
      PharmacyIcon: defineAsyncComponent(() => import('@/components/icons/PharmacyIcon.vue')),
      PhoneCallIcon: defineAsyncComponent(() => import('@/components/icons/PhoneCallIcon.vue')),
      PhoneCallInIcon: defineAsyncComponent(() => import('@/components/icons/PhoneCallInIcon.vue')),
      PhoneCallOutIcon: defineAsyncComponent(() => import('@/components/icons/PhoneCallOutIcon.vue')),
      PhoneCallTransferIcon: defineAsyncComponent(() => import('@/components/icons/PhoneCallTransferIcon.vue')),
      PhoneSignalIcon: defineAsyncComponent(() => import('@/components/icons/PhoneSignalIcon.vue')),
      PhotoIcon: defineAsyncComponent(() => import('@/components/icons/PhotoIcon.vue')),
      PinIcon: defineAsyncComponent(() => import('@/components/icons/PinIcon.vue')),
      PlaneLandingIcon: defineAsyncComponent(() => import('@/components/icons/PlaneLandingIcon.vue')),
      PlaneTakeOffIcon: defineAsyncComponent(() => import('@/components/icons/PlaneTakeOffIcon.vue')),
      PlayIcon: defineAsyncComponent(() => import('@/components/icons/PlayIcon.vue')),
      PocketIcon: defineAsyncComponent(() => import('@/components/icons/PocketIcon.vue')),
      PowerIcon: defineAsyncComponent(() => import('@/components/icons/PowerIcon.vue')),
      PresentationIcon: defineAsyncComponent(() => import('@/components/icons/PresentationIcon.vue')),
      PresentationGraphIcon: defineAsyncComponent(() => import('@/components/icons/PresentationGraphIcon.vue')),
      ProductivityIcon: defineAsyncComponent(() => import('@/components/icons/ProductivityIcon.vue')),
      QuestionMarkWithCircleIcon: defineAsyncComponent(() => import('@/components/icons/QuestionMarkWithCircleIcon.vue')),
      RadioIcon: defineAsyncComponent(() => import('@/components/icons/RadioIcon.vue')),
      RadioPoleIcon: defineAsyncComponent(() => import('@/components/icons/RadioPoleIcon.vue')),
      ReceiptIcon: defineAsyncComponent(() => import('@/components/icons/ReceiptIcon.vue')),
      RectangleIcon: defineAsyncComponent(() => import('@/components/icons/RectangleIcon.vue')),
      RectangleContractIcon: defineAsyncComponent(() => import('@/components/icons/RectangleContractIcon.vue')),
      RectangleExpandIcon: defineAsyncComponent(() => import('@/components/icons/RectangleExpandIcon.vue')),
      RectangleLeftFilledIcon: defineAsyncComponent(() => import('@/components/icons/RectangleLeftFilledIcon.vue')),
      RectangleLeftFilledRoundedIcon: defineAsyncComponent(() => import('@/components/icons/RectangleLeftFilledRoundedIcon.vue')),
      RectangleOnRectangleHorizontalIcon: defineAsyncComponent(() => import('@/components/icons/RectangleOnRectangleHorizontalIcon.vue')),
      RectangleOnRectangleVerticalIcon: defineAsyncComponent(() => import('@/components/icons/RectangleOnRectangleVerticalIcon.vue')),
      RectangleRightFilledIcon: defineAsyncComponent(() => import('@/components/icons/RectangleRightFilledIcon.vue')),
      RectangleRightFilledRoundedIcon: defineAsyncComponent(() => import('@/components/icons/RectangleRightFilledRoundedIcon.vue')),
      RectangleSmallWithBlocksIcon: defineAsyncComponent(() => import('@/components/icons/RectangleSmallWithBlocksIcon.vue')),
      RectangleWithBlocksIcon: defineAsyncComponent(() => import('@/components/icons/RectangleWithBlocksIcon.vue')),
      RecycleTriangleIcon: defineAsyncComponent(() => import('@/components/icons/RecycleTriangleIcon.vue')),
      ReturnDownIcon: defineAsyncComponent(() => import('@/components/icons/ReturnDownIcon.vue')),
      ReturnLeftIcon: defineAsyncComponent(() => import('@/components/icons/ReturnLeftIcon.vue')),
      ReturnRightIcon: defineAsyncComponent(() => import('@/components/icons/ReturnRightIcon.vue')),
      ReturnUpIcon: defineAsyncComponent(() => import('@/components/icons/ReturnUpIcon.vue')),
      RetweetIcon: defineAsyncComponent(() => import('@/components/icons/RetweetIcon.vue')),
      RibbonIcon: defineAsyncComponent(() => import('@/components/icons/RibbonIcon.vue')),
      RibbonAddIcon: defineAsyncComponent(() => import('@/components/icons/RibbonAddIcon.vue')),
      RocketIcon: defineAsyncComponent(() => import('@/components/icons/RocketIcon.vue')),
      RudderWheelIcon: defineAsyncComponent(() => import('@/components/icons/RudderWheelIcon.vue')),
      RulerIcon: defineAsyncComponent(() => import('@/components/icons/RulerIcon.vue')),
      ScaleIcon: defineAsyncComponent(() => import('@/components/icons/ScaleIcon.vue')),
      ScaleCircleIcon: defineAsyncComponent(() => import('@/components/icons/ScaleCircleIcon.vue')),
      SearchIcon: defineAsyncComponent(() => import('@/components/icons/SearchIcon.vue')),
      ShareIcon: defineAsyncComponent(() => import('@/components/icons/ShareIcon.vue')),
      ShareArrowIcon: defineAsyncComponent(() => import('@/components/icons/ShareArrowIcon.vue')),
      ShareCirlceIcon: defineAsyncComponent(() => import('@/components/icons/ShareCirlceIcon.vue')),
      SharingIcon: defineAsyncComponent(() => import('@/components/icons/SharingIcon.vue')),
      ShieldIcon: defineAsyncComponent(() => import('@/components/icons/ShieldIcon.vue')),
      ShoppingBasketIcon: defineAsyncComponent(() => import('@/components/icons/ShoppingBasketIcon.vue')),
      ShoppingBasketIcon: defineAsyncComponent(() => import('@/components/icons/ShoppingBasketIcon.vue')),
      ShoppingCartEmptyIcon: defineAsyncComponent(() => import('@/components/icons/ShoppingCartEmptyIcon.vue')),
      ShoppingCartFullIcon: defineAsyncComponent(() => import('@/components/icons/ShoppingCartFullIcon.vue')),
      SideBarLeftIcon: defineAsyncComponent(() => import('@/components/icons/SideBarLeftIcon.vue')),
      SideBarRightIcon: defineAsyncComponent(() => import('@/components/icons/SideBarRightIcon.vue')),
      SodaCanIcon: defineAsyncComponent(() => import('@/components/icons/SodaCanIcon.vue')),
      SpacingHorizontalIcon: defineAsyncComponent(() => import('@/components/icons/SpacingHorizontalIcon.vue')),
      SpacingVerticalIcon: defineAsyncComponent(() => import('@/components/icons/SpacingVerticalIcon.vue')),
      SparksIcon: defineAsyncComponent(() => import('@/components/icons/SparksIcon.vue')),
      SplashIcon: defineAsyncComponent(() => import('@/components/icons/SplashIcon.vue')),
      SportsIcon: defineAsyncComponent(() => import('@/components/icons/SportsIcon.vue')),
      SpotifyIcon: defineAsyncComponent(() => import('@/components/icons/SpotifyIcon.vue')),
      SproutIcon: defineAsyncComponent(() => import('@/components/icons/SproutIcon.vue')),
      SquareIcon: defineAsyncComponent(() => import('@/components/icons/SquareIcon.vue')),
      SquareAndPencilIcon: defineAsyncComponent(() => import('@/components/icons/SquareAndPencilIcon.vue')),
      StackHorizontalIcon: defineAsyncComponent(() => import('@/components/icons/StackHorizontalIcon.vue')),
      StackVerticalIcon: defineAsyncComponent(() => import('@/components/icons/StackVerticalIcon.vue')),
      StarIcon: defineAsyncComponent(() => import('@/components/icons/StarIcon.vue')),
      StatementIcon: defineAsyncComponent(() => import('@/components/icons/StatementIcon.vue')),
      StopIcon: defineAsyncComponent(() => import('@/components/icons/StopIcon.vue')),
      StoreIcon: defineAsyncComponent(() => import('@/components/icons/StoreIcon.vue')),
      StrikethroughIcon: defineAsyncComponent(() => import('@/components/icons/StrikethroughIcon.vue')),
      StrokeWidthIcon: defineAsyncComponent(() => import('@/components/icons/StrokeWidthIcon.vue')),
      TabBottomIcon: defineAsyncComponent(() => import('@/components/icons/TabBottomIcon.vue')),
      TabLeftIcon: defineAsyncComponent(() => import('@/components/icons/TabLeftIcon.vue')),
      TabLeftCompactIcon: defineAsyncComponent(() => import('@/components/icons/TabLeftCompactIcon.vue')),
      TabRightIcon: defineAsyncComponent(() => import('@/components/icons/TabRightIcon.vue')),
      TabRightCompactIcon: defineAsyncComponent(() => import('@/components/icons/TabRightCompactIcon.vue')),
      TabcellsIcon: defineAsyncComponent(() => import('@/components/icons/TabcellsIcon.vue')),
      TabcellsAddIcon: defineAsyncComponent(() => import('@/components/icons/TabcellsAddIcon.vue')),
      TagIcon: defineAsyncComponent(() => import('@/components/icons/TagIcon.vue')),
      TagsIcon: defineAsyncComponent(() => import('@/components/icons/TagsIcon.vue')),
      TakeAwayIcon: defineAsyncComponent(() => import('@/components/icons/TakeAwayIcon.vue')),
      TargetIcon: defineAsyncComponent(() => import('@/components/icons/TargetIcon.vue')),
      TaylorSwiftIcon: defineAsyncComponent(() => import('@/components/icons/TaylorSwiftIcon.vue')),
      Text1Icon: defineAsyncComponent(() => import('@/components/icons/Text1Icon.vue')),
      Text2Icon: defineAsyncComponent(() => import('@/components/icons/Text2Icon.vue')),
      Text3Icon: defineAsyncComponent(() => import('@/components/icons/Text3Icon.vue')),
      TextAlignCenterIcon: defineAsyncComponent(() => import('@/components/icons/TextAlignCenterIcon.vue')),
      TextAlignJustifiedIcon: defineAsyncComponent(() => import('@/components/icons/TextAlignJustifiedIcon.vue')),
      TextAlignLeftIcon: defineAsyncComponent(() => import('@/components/icons/TextAlignLeftIcon.vue')),
      TextAlignRightIcon: defineAsyncComponent(() => import('@/components/icons/TextAlignRightIcon.vue')),
      TornadoIcon: defineAsyncComponent(() => import('@/components/icons/TornadoIcon.vue')),
      TrashIcon: defineAsyncComponent(() => import('@/components/icons/TrashIcon.vue')),
      TrashWithLinesIcon: defineAsyncComponent(() => import('@/components/icons/TrashWithLinesIcon.vue')),
      TrayIcon: defineAsyncComponent(() => import('@/components/icons/TrayIcon.vue')),
      TrayAndArrowDownIcon: defineAsyncComponent(() => import('@/components/icons/TrayAndArrowDownIcon.vue')),
      TrayAndArrowLeftIcon: defineAsyncComponent(() => import('@/components/icons/TrayAndArrowLeftIcon.vue')),
      TrayAndArrowRightIcon: defineAsyncComponent(() => import('@/components/icons/TrayAndArrowRightIcon.vue')),
      TrayAndArrowUpIcon: defineAsyncComponent(() => import('@/components/icons/TrayAndArrowUpIcon.vue')),
      TrayFullIcon: defineAsyncComponent(() => import('@/components/icons/TrayFullIcon.vue')),
      TrayStackedIcon: defineAsyncComponent(() => import('@/components/icons/TrayStackedIcon.vue')),
      TreeMapDownIcon: defineAsyncComponent(() => import('@/components/icons/TreeMapDownIcon.vue')),
      TreeMapLeftIcon: defineAsyncComponent(() => import('@/components/icons/TreeMapLeftIcon.vue')),
      TreeMapRightIcon: defineAsyncComponent(() => import('@/components/icons/TreeMapRightIcon.vue')),
      TreeMapUpIcon: defineAsyncComponent(() => import('@/components/icons/TreeMapUpIcon.vue')),
      TriangleIcon: defineAsyncComponent(() => import('@/components/icons/TriangleIcon.vue')),
      TriangleDownIcon: defineAsyncComponent(() => import('@/components/icons/TriangleDownIcon.vue')),
      TriangleDownFilledIcon: defineAsyncComponent(() => import('@/components/icons/TriangleDownFilledIcon.vue')),
      TriangleDownOutlineIcon: defineAsyncComponent(() => import('@/components/icons/TriangleDownOutlineIcon.vue')),
      TriangleEquilateralIcon: defineAsyncComponent(() => import('@/components/icons/TriangleEquilateralIcon.vue')),
      TriangleLeftIcon: defineAsyncComponent(() => import('@/components/icons/TriangleLeftIcon.vue')),
      TriangleLeftFilledIcon: defineAsyncComponent(() => import('@/components/icons/TriangleLeftFilledIcon.vue')),
      TriangleLeftOutlineIcon: defineAsyncComponent(() => import('@/components/icons/TriangleLeftOutlineIcon.vue')),
      TriangleRightIcon: defineAsyncComponent(() => import('@/components/icons/TriangleRightIcon.vue')),
      TriangleRightFilledIcon: defineAsyncComponent(() => import('@/components/icons/TriangleRightFilledIcon.vue')),
      TriangleRightOutlineIcon: defineAsyncComponent(() => import('@/components/icons/TriangleRightOutlineIcon.vue')),
      TriangleUpIcon: defineAsyncComponent(() => import('@/components/icons/TriangleUpIcon.vue')),
      TriangleUpFilledIcon: defineAsyncComponent(() => import('@/components/icons/TriangleUpFilledIcon.vue')),
      TriangleUpOutlineIcon: defineAsyncComponent(() => import('@/components/icons/TriangleUpOutlineIcon.vue')),
      TriangleWithBlocksIcon: defineAsyncComponent(() => import('@/components/icons/TriangleWithBlocksIcon.vue')),
      TruckIcon: defineAsyncComponent(() => import('@/components/icons/TruckIcon.vue')),
      TwitterIcon: defineAsyncComponent(() => import('@/components/icons/TwitterIcon.vue')),
      UnderlineIcon: defineAsyncComponent(() => import('@/components/icons/UnderlineIcon.vue')),
      UnlockedIcon: defineAsyncComponent(() => import('@/components/icons/UnlockedIcon.vue')),
      UploadToCloudIcon: defineAsyncComponent(() => import('@/components/icons/UploadToCloudIcon.vue')),
      UserIcon: defineAsyncComponent(() => import('@/components/icons/UserIcon.vue')),
      WalletIcon: defineAsyncComponent(() => import('@/components/icons/WalletIcon.vue')),
      WalletPassIcon: defineAsyncComponent(() => import('@/components/icons/WalletPassIcon.vue')),
      WeatherIcon: defineAsyncComponent(() => import('@/components/icons/WeatherIcon.vue')),
      WebsiteWithImageIcon: defineAsyncComponent(() => import('@/components/icons/WebsiteWithImageIcon.vue')),
      WebsiteWithTextIcon: defineAsyncComponent(() => import('@/components/icons/WebsiteWithTextIcon.vue')),
      WesbiteScaffoldingIcon: defineAsyncComponent(() => import('@/components/icons/WesbiteScaffoldingIcon.vue')),
      WidgetsIcon: defineAsyncComponent(() => import('@/components/icons/WidgetsIcon.vue')),
      WindIcon: defineAsyncComponent(() => import('@/components/icons/WindIcon.vue')),
      WindowsWindowIcon: defineAsyncComponent(() => import('@/components/icons/WindowsWindowIcon.vue')),
    },

    props:{
      icon: {
        type: Object,
        default: {},
      },
      iconName: {
        type: String,
        default: 'dashboard',
      },
      iconOnHover: {
        type: String,
        default: '',
      },
      size: {
        type: Number,
        default: 24,
      },
      iconColor: {
        type: String,
        default: 'currentColor',
      },
      filled: {
        type: Boolean,
        default: false,
      },
    },

    data(){
      return{
        isHovering: false,
        // iconToShow: this.getIcon,
      }
    },

    watch:{
      icon: {
        handler: function (val, oldVal) {
        },
        deep: true
      },
    },

    methods:{
      mouseOver(){
        if (!this.isHovering && this.iconOnHover.length != 0) {
          this.isHovering = true;
        }
      },

      mouseOut(){
        if (this.isHovering && this.iconOnHover.length != 0) {
          this.isHovering = false;
        }
      },

      iconComp(){
        const iconNameCamelCase = this.iconName.replace(/-| /g, ' ').split(' ').map((word, index) => {
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }).join('') + 'Icon';

        return iconNameCamelCase
      }

    },

    computed:{
      getIcon(){
        let size = this.size;

        if (size != '24' || size != '18') {
          size = '24';
        }


        try {
          // return defineAsyncComponent(() => import(`~~/assets/icons/18px/abc-18px.svg`))
          // return defineAsyncComponent(() => import(`@/assets/icons/${this.size}px/${this.icon}-${this.size}px.svg`))
          // let icon = import('@/assets/icons/' + this.size + 'px/' + this.icon + '-' + this.size + 'px.svg');
          // return icon
        } catch (error) {
          console.log('error: ', error);
          return ''
        }
      },

      svgContent() {
        try{
          if (!this.icon?.icon?.base64_24px || this.icon?.icon?.base64_24px.includes('https://parsefiles.back4app.com/') ) return '';
          const base64Content = this.icon.icon.base64_24px;
          const svgString = atob(base64Content.split(',')[1]);
          return svgString;
        }catch(error){
          console.log('svgContent error 1: ', this.icon?.icon?.base64_24px)
          console.log('svgContent error 2: ', error)
        }
      },

      getHoverIcon(){
        let size = this.size;

        if (size != '24' || size != '18') {
          size = '24';
        }

        try {
          let icon = require('@/assets/icons/' + this.size + 'px/' + this.iconOnHover + '-' + this.size + 'px.svg');
          return icon
        } catch (error) {
          console.log('error hover: ', error);
          return ''
        }
      }
    }
  }
</script>

<style scoped>
.svg-container :deep(svg) {
  width: 100%;
  height: 100%;
  color: currentColor;
}
</style>
