import type { ChildrenType, Direction } from "@core/types";

// Context Imports
import { VerticalNavProvider } from "@menu/contexts/verticalNavContext";

import ThemeProvider from "@components/theme";

// Util Imports
import { getDemoName, getMode, getSettingsFromCookie, getSystemMode } from "@core/utils/serverHelpers";

import { SettingsProvider } from "@/@core/contexts/SettingContextPro";

type Props = ChildrenType & {
  direction: Direction;
};

const ThemeProviders = ({ children, direction }: Props) => {
  const mode = getMode();
  const settingsCookie = getSettingsFromCookie();
  const demoName = getDemoName();
  const systemMode = getSystemMode();

  return (
    <VerticalNavProvider>
      <SettingsProvider
        settingsCookie={settingsCookie}
        mode={mode}
        demoName={demoName}>
        <ThemeProvider
          direction={direction}
          systemMode={systemMode}>
          {children}
        </ThemeProvider>
      </SettingsProvider>
    </VerticalNavProvider>
  );
};

export default ThemeProviders;
