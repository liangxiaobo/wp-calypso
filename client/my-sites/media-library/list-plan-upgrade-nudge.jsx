/**
 * External dependencies
 */
import React, { PropTypes } from 'react';
import { identity } from 'lodash';

/**
 * Internal dependencies
 */
import { localize } from 'i18n-calypso';
import UpgradeNudgeExpanded from 'blocks/upgrade-nudge-expanded';
import { PLAN_PREMIUM, FEATURE_VIDEO_UPLOADS } from 'lib/plans/constants';

export const MediaLibraryUpgradeNudge = ( { translate } ) => (
	<div className="media-library__videopress-nudge-container">
		<UpgradeNudgeExpanded
			plan={ PLAN_PREMIUM }
			title={ translate( 'Upgrade to a Premium Plan and Enable VideoPress' ) }
			subtitle={ translate( `By upgrading to a Premium Plan you'll enable VideoPress support on your site.` ) }
			highlightedFeature={ FEATURE_VIDEO_UPLOADS }
			eventName="calypso_video_uploads_upgrade_nudge_impression"
			benefits={ [
				translate(
					'Upload videos to your site with an interface designed specifically for WordPress.',
					{ comment: 'Perk for upgrading to premium plan' }
				),
				translate(
					'Present videos using a lightweight and responsive player that is ad-free and unbranded.',
					{ comment: 'Perk for upgrading to premium plan' }
				),
				translate(
					'See where your videos have been shared as well as stats for individual and overall video plays.',
					{ comment: 'Perk for upgrading to premium plan' }
				)
			] }
		/>
	</div>
);

MediaLibraryUpgradeNudge.propTypes = {
	translate: PropTypes.func
};

MediaLibraryUpgradeNudge.defaultProps = {
	translate: identity
};

export default localize( MediaLibraryUpgradeNudge );
