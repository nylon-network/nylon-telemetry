// Source code for the Substrate Telemetry Server.
// Copyright (C) 2021 Parity Technologies (UK) Ltd.
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with this program. If not, see <https://www.gnu.org/licenses/>.

import * as React from 'react';
import { Icon } from '../';
import { State } from '../../state';
import { PersistentObject } from '../../persist';

import './Setting.css';

export namespace Setting {
  export interface Props {
    icon: string;
    label: string;
    setting: keyof State.Settings;
    settings: PersistentObject<State.Settings>;
  }
}

export class Setting extends React.Component<Setting.Props, {}> {
  public render() {
    const { icon, label, setting, settings } = this.props;

    const checked = settings.get(setting);
    const className = checked ? 'Setting Setting-on' : 'Setting';

    return (
      <div className={className} onClick={this.toggle}>
        <Icon src={icon} />
        {label}
        <span className="Setting-switch">
          <span className="Setting-knob" />
        </span>
      </div>
    );
  }

  private toggle = () => {
    const { setting, settings } = this.props;

    settings.set(setting, !settings.get(setting));
  };
}
