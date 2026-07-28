/* eslint-disable react-refresh/only-export-components */
import {
  AnchorHTMLAttributes,
  createContext,
  MouseEvent,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

type NavigateOptions = {
  replace?: boolean;
};

type RouterContextValue = {
  pathname: string;
  navigate: (to: string, options?: NavigateOptions) => void;
};

const RouterContext = createContext<RouterContextValue | null>(null);

const normalizePathname = (pathname: string) =>
  pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;

export const RouterProvider = ({ children }: { children: ReactNode }) => {
  const [pathname, setPathname] = useState(() =>
    normalizePathname(window.location.pathname),
  );

  useEffect(() => {
    const handlePopState = () =>
      setPathname(normalizePathname(window.location.pathname));

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const navigate = useCallback(
    (to: string, options: NavigateOptions = {}) => {
      const target = new URL(to, window.location.href);
      const nextPathname = normalizePathname(target.pathname);

      if (target.origin !== window.location.origin) {
        window.location.assign(target);
        return;
      }

      const method = options.replace ? "replaceState" : "pushState";
      window.history[method]({}, "", `${target.pathname}${target.search}${target.hash}`);
      setPathname(nextPathname);
    },
    [],
  );

  const value = useMemo(
    () => ({ pathname, navigate }),
    [navigate, pathname],
  );

  return (
    <RouterContext.Provider value={value}>{children}</RouterContext.Provider>
  );
};

const useRouter = () => {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error("Router components must be rendered inside RouterProvider.");
  }
  return context;
};

export const usePathname = () => useRouter().pathname;
export const useNavigate = () => useRouter().navigate;

type LinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  to: string;
};

export const Link = ({ to, onClick, target, ...props }: LinkProps) => {
  const navigate = useNavigate();

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      (target && target !== "_self")
    ) {
      return;
    }

    const destination = new URL(to, window.location.href);
    if (destination.origin !== window.location.origin) return;

    event.preventDefault();
    navigate(to);
  };

  return <a href={to} target={target} onClick={handleClick} {...props} />;
};

type NavLinkProps = Omit<LinkProps, "className"> & {
  className?: string | ((state: { isActive: boolean }) => string);
  end?: boolean;
};

export const NavLink = ({
  className,
  end = false,
  to,
  ...props
}: NavLinkProps) => {
  const pathname = usePathname();
  const destination = normalizePathname(new URL(to, window.location.href).pathname);
  const isActive =
    pathname === destination ||
    (!end && destination !== "/" && pathname.startsWith(`${destination}/`));
  const resolvedClassName =
    typeof className === "function" ? className({ isActive }) : className;

  return <Link to={to} className={resolvedClassName} {...props} />;
};
