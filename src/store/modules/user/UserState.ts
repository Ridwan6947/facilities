export default interface UserState {
    token: string;
    current: object | null;
    permissions: any;
    instanceUrl: string;
    pwaState: any;
}